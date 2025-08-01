import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface ValveViewerProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function ValveViewer({ className, style }: ValveViewerProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      32,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 1.1));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.1);
    dirLight.position.set(6, 8, 8);
    scene.add(dirLight);

    // Create a pivot group for upright rotation
    const pivot = new THREE.Group();
    scene.add(pivot);

    let frameId: number;

    function centerAndFrameModel(object: THREE.Object3D) {
      // Center the model
      const box = new THREE.Box3().setFromObject(object);
      const size = new THREE.Vector3();
      box.getSize(size);
      const center = new THREE.Vector3();
      box.getCenter(center);

      object.position.x -= center.x;
      object.position.y -= center.y;
      object.position.z -= center.z;

      // Camera distance logic
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
      cameraZ *= 1.4; // Padding
      camera.position.set(0, 0, cameraZ);

      camera.near = maxDim / 100;
      camera.far = maxDim * 10;
      camera.updateProjectionMatrix();
      camera.lookAt(0, 0, 0);
    }

    // Load model
    const loader = new GLTFLoader();
    const modelPath = "/models/second.glb";

    loader.load(
      modelPath,
      (gltf: any) => {
        const model = gltf.scene;
        if (model) {
          centerAndFrameModel(model);
          // Rotate upright and make stem point at the top
          model.rotation.x = Math.PI / 2;
          pivot.add(model);
        }
      },
      undefined,
      (error: any) => {
        console.error("ValveViewer: Error loading model", error);
      }
    );

    // Animation
    const animate = () => {
      // Upright spinning around the "stem"
      pivot.rotation.y += 0.003; // Slow, smooth spin
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    // Responsive resize
    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={className}
      style={{
        width: "100%",
        height: "100%",
        ...style,
      }}
    />
  );
}
