import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ValveViewer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const frameRef = useRef<number | null>(null);

  const baseSizeRef = useRef<THREE.Vector3 | null>(null);
  const updateModelSizeRef = useRef<() => void>(() => {});

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth || window.innerWidth;
    const height = containerRef.current.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(2, 0, 6);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.domElement.style.position = "fixed";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.pointerEvents = "none";
    renderer.domElement.style.zIndex = "10";

    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    let scrollTriggerInstance: ScrollTrigger | undefined;

    import("three/examples/jsm/loaders/GLTFLoader.js").then(
      ({ GLTFLoader }) => {
        const loader = new GLTFLoader();
        loader.load("/models/3way_valve.glb", (gltf) => {
          const model = gltf.scene;
          scene.add(model);
          modelRef.current = model;

          // --- Center model to its origin so positions are consistent ---
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          model.position.sub(center);
          model.updateMatrixWorld(true);

          const baseSize = new THREE.Vector3();
          box.getSize(baseSize);
          baseSizeRef.current = baseSize;

          // --- Responsive sizing & positioning (anchored to right edge) ---
          const updateModelSize = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth < 768) {
              model.visible = false;
              return;
            }
            model.visible = true;

            // 1) Choose scale by breakpoint (tweak these freely)
            let scale: number;
            if (screenWidth >= 3000) scale = 0.0028;
            else if (screenWidth >= 2560) scale = 0.003;
            else if (screenWidth >= 1920) scale = 0.0035;
            else if (screenWidth >= 1440) scale = 0.004;
            else if (screenWidth >= 1024) scale = 0.0042;
            else scale = 0.0031; // 768–1023

            model.scale.setScalar(scale);

            // 2) Keep constant pixel margin from the right edge
            const w = containerRef.current?.clientWidth ?? window.innerWidth;
            const h = containerRef.current?.clientHeight ?? window.innerHeight;

            camera.aspect = w / h;
            camera.updateProjectionMatrix();

            const distance = camera.position.z - 0; // model at z = 0
            const halfHeight =
              Math.tan(THREE.MathUtils.degToRad(camera.fov * 0.5)) * distance;
            const halfWidth = halfHeight * camera.aspect;

            const marginPx =
              screenWidth < 1024
                ? 72
                : screenWidth < 1440
                ? 190
                : screenWidth < 1920
                ? 260
                : screenWidth < 2560
                ? 300
                : screenWidth < 3000
                ? 400
                : 500;

            const worldPerPx = (halfWidth * 2) / w;
            const marginWorld = marginPx * worldPerPx;

            const base = baseSizeRef.current ?? new THREE.Vector3(1, 1, 1);
            const modelHalfWidth = (base.x * scale) / 2;

            const xPos = halfWidth - marginWorld - modelHalfWidth;
            const yPos = 0;

            model.position.set(xPos, yPos, 0);
            model.rotation.set(2.25, 0.3, 5.5);
          };

          updateModelSizeRef.current = updateModelSize;
          updateModelSize(); // initial

          // Scroll rotation
          scrollTriggerInstance = gsap.to(model.rotation, {
            y: "+=6.28",
            ease: "none",
            scrollTrigger: {
              trigger: document.body,
              start: "top top",
              end: "bottom bottom",
              scrub: true,
            },
          }) as unknown as ScrollTrigger;
        });
      }
    );

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!rendererRef.current || !containerRef.current) return;
      const newWidth = containerRef.current.clientWidth || window.innerWidth;
      const newHeight = containerRef.current.clientHeight || window.innerHeight;

      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      if (modelRef.current) {
        updateModelSizeRef.current();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (rendererRef.current.domElement.parentNode) {
          rendererRef.current.domElement.parentNode.removeChild(
            rendererRef.current.domElement
          );
        }
      }
      window.removeEventListener("resize", handleResize);
      if (scrollTriggerInstance) scrollTriggerInstance.kill();
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      // If you prefer Tailwind to hide completely on mobile, keep md:block hidden.
      // Otherwise, drop those classes and let JS handle visibility.
      className="fixed top-0 left-0 w-full h-screen z-10 pointer-events-none md:block hidden"
    />
  );
};

export default ValveViewer;
