import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ValveViewer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let model: THREE.Group;
    let renderer: THREE.WebGLRenderer | null = null;

    const init = async () => {
      const { GLTFLoader } = await import(
        "three/examples/jsm/loaders/GLTFLoader.js"
      );

      if (!containerRef.current) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      );
      camera.position.set(0, 7, 2);
      camera.lookAt(0, 0, 0);
      camera.up.set(0, 1, 0); // orient Z-axis toward screen (for fixing rotation)

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(5, 5, 5);
      scene.add(light, new THREE.AmbientLight(0xffffff, 0.5));

      const loader = new GLTFLoader();
      loader.load("/models/3way_valve.glb", (gltf) => {
        model = gltf.scene;
        model.scale.set(0.007, 0.007, 0.007);
        model.position.set(3, -1, 0);

        model.rotation.set(1.15, 1.3, -0.5);
        scene.add(model);

        // Section 1 – Company → Rotate Y
        gsap.to(model.rotation, {
          scrollTrigger: {
            trigger: "#company",
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
          y: -Math.PI,
        });

        // Section 3 – Testimonials → Zoom in
        gsap.to(camera.position, {
          scrollTrigger: {
            trigger: "#testimonials",
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
          z: 5,
          onUpdate: () => camera.lookAt(0, 0, 0),
        });

        // Section 4 – Fade out model when footer enters view
        ScrollTrigger.create({
          trigger: "footer", // or "#site-footer" if you have a specific ID
          start: "top bottom", // when top of footer enters bottom of screen
          end: "top center",
          scrub: true,
        });
      });

      const animate = () => {
        requestAnimationFrame(animate);
        renderer?.render(scene, camera);
      };
      animate();

      window.addEventListener("resize", () => {
        if (!renderer) return;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
    };

    init();

    return () => {
      renderer?.dispose();
      containerRef.current?.replaceChildren();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 20,
        pointerEvents: "none",
      }}
    />
  );
};

export default ValveViewer;
