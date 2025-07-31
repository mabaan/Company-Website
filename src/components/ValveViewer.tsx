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

          // detailed, granular breakpoints for valve scaling
const scale = (() => {
  // super-ultrawide 5K and above
  if (w >= 5120) return 0.0060;

  // super-ultrawide 4K (e.g. 3840×1440 and above)
  if (w >= 3840) return 0.0041;

  // ultrawide 3440px (common 21:9 monitors)
  if (w >= 3440) return 0.0050;

  // ultrawide QHD 2560px
  if (w >= 2560) return 0.0040;

  // large desktop (1920×1080+)
  if (w >= 1920) return 0.0045;

  // standard desktop (1600px)
  if (w >= 1600) return 0.0042;

  // laptop / small desktop (1440px)
  if (w >= 1440) return 0.0040;

  // tablet / large phone landscape (1024px)
  if (w >= 1024) return 0.0036;

  // small tablets and large phones portrait (768px)
  if (w >= 768) return 0.0032;

  // mobile portrait and below
  return 0.0028;
})();

valve.scale.setScalar(scale);

          // maintain camera aspect
          const h = window.innerHeight;
          camera.aspect = w / h;
          camera.updateProjectionMatrix();

          // anchor to right edge
          const dist = camera.position.z;
          const halfH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * dist;
          const halfW = halfH * camera.aspect;
          // granular pixel margins to keep valve pinned neatly at the right
          const marginPx = (() => {
            // 5K and above ultrawide
            if (w >= 5120) return 900;
            // 4K ultrawide (3840px+)
            if (w >= 3840) return 800;
            // 21:9 common ultrawide (3440px+)
            if (w >= 3440) return 700;
            // QHD / widescreen (2560px+)
            if (w >= 2560) return 500;
            // Full HD and above (1920px+)
            if (w >= 1920) return 350;
            // Laptop / small desktop (1440px+)
            if (w >= 1440) return 300;
            // Tablet / large phone landscape (1024px+)
            if (w >= 1024) return 200;
            // Small tablets / large phones (768px+)
            if (w >= 768)  return 150;
            // Mobile portrait
            return 100;
          })();

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
