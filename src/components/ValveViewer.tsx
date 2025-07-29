// src/components/ValveViewer.tsx
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

export default function ValveViewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameRef = useRef<number | null>(null);
  const updateSizeRef = useRef<() => void>(() => {});

  useEffect(() => {
    if (!containerRef.current) return;

    // ————————————————————————————————
    // 1) Scene, Camera & Lights
    // ————————————————————————————————
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      100
    );
    camera.position.set(2, 0, 6);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    Object.assign(renderer.domElement.style, {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: "0",
    });
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    // ————————————————————————————————
    // 2) Load & center the model
    // ————————————————————————————————
    import("three/examples/jsm/loaders/GLTFLoader.js").then(({ GLTFLoader }) => {
      new GLTFLoader().load("/models/3way_valve.glb", (gltf) => {
        const valve = gltf.scene;
        scene.add(valve);

        // center pivot
        const box = new THREE.Box3().setFromObject(valve);
        const center = box.getCenter(new THREE.Vector3());
        valve.position.sub(center);

        // compute base size
        const size = new THREE.Vector3();
        box.getSize(size);

        // responsive size & position fn
        const updateValve = () => {
          const w = window.innerWidth;
          if (w < 640) {
            valve.visible = false;
            return;
          }
          valve.visible = true;

          // detailed breakpoints
          const scale =
            w >= 3440 ? 0.007 :  // super-ultrawide
            w >= 2560 ? 0.006 :  // ultrawide
            w >= 1920 ? 0.005 :  // large desktop
            w >= 1440 ? 0.0045 : // desktop
            w >= 1024 ? 0.004 :  // laptop/tablet
            0.0032;              // small

          valve.scale.setScalar(scale);

          // maintain camera aspect
          const h = window.innerHeight;
          camera.aspect = w / h;
          camera.updateProjectionMatrix();

          // anchor to right edge
          const dist = camera.position.z;
          const halfH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * dist;
          const halfW = halfH * camera.aspect;
          const marginPx = 
            w >= 3440 ? 500 :
            w >= 2560 ? 400 :
            w >= 1920 ? 300 :
            200;
          const worldPerPx = (halfW * 2) / w;
          const marginWorld = marginPx * worldPerPx;
          const halfModelW = (size.x * scale) / 2;

          valve.position.set(halfW - marginWorld - halfModelW, 0, 0);

          // initial static orientation: tilt X/Z so “top” faces up
          valve.rotation.set(2.25, 0, 5.5); 
          // note: Y=0 so we spin purely around vertical axis
        };

        updateSizeRef.current = updateValve;
        updateValve();

        // ————————————————————————————————
        // 3) Continuous Y-axis spin (left ↔ right)
        // ————————————————————————————————
        gsap.to(valve.rotation, {
          y: "+=6.28319",  // 2π radians
          duration: 40,
          ease: "none",
          repeat: -1,
        });
      });
    });

    // ————————————————————————————————
    // 4) Render loop
    // ————————————————————————————————
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // ————————————————————————————————
    // 5) Resize handler
    // ————————————————————————————————
    const onResize = () => {
      if (!rendererRef.current || !containerRef.current) return;
      rendererRef.current.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
      camera.aspect =
        containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      updateSizeRef.current();
    };
    window.addEventListener("resize", onResize);

    // ————————————————————————————————
    // 6) Cleanup
    // ————————————————————————————————
    return () => {
      cancelAnimationFrame(frameRef.current!);
      window.removeEventListener("resize", onResize);
      if (rendererRef.current) {
        rendererRef.current.dispose();
        rendererRef.current.domElement.remove();
      }
    };
  }, []);

  // Parent container must be `.relative` so this `.absolute` fills it:
  return <div ref={containerRef} className="absolute inset-0" />;
}
