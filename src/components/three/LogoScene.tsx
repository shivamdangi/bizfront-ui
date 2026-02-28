import { memo, useEffect, useRef } from 'react';
import * as THREE from 'three';

interface LogoSceneProps {
  active: boolean;
  pointer: { x: number; y: number };
  mobile: boolean;
}

const LogoScene = ({ active, pointer, mobile }: LogoSceneProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef(pointer);
  const activeRef = useRef(active);

  pointerRef.current = pointer;
  activeRef.current = active;

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(mobile ? 54 : 42, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 1.5, 5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 0.7);
    const purple = new THREE.PointLight(0xef2fff, mobile ? 16 : 24, 12);
    purple.position.set(4, 4, 4);
    const teal = new THREE.PointLight(0x38ffe2, mobile ? 10 : 16, 11);
    teal.position.set(-3, 2, 3);

    scene.add(ambient, purple, teal);

    const group = new THREE.Group();
    const layers: THREE.Mesh[] = [];

    for (let i = 0; i < 4; i += 1) {
      const geometry = new THREE.BoxGeometry(2.3, 0.25, 1.2);
      const material = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#9f47ff'),
        transmission: 0.98,
        roughness: 0.1,
        thickness: 0.5,
        ior: 1.2,
        clearcoat: 1,
        emissive: new THREE.Color('#ba73ff'),
        emissiveIntensity: 0.4
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(0, i * 0.4, 0);
      mesh.rotation.set(0.25, i * 0.08, 0.18);
      mesh.scale.setScalar(1 - i * 0.09);
      layers.push(mesh);
      group.add(mesh);
    }

    group.position.y = mobile ? -0.2 : 0;
    scene.add(group);

    let frame = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const time = clock.getElapsedTime();
      group.rotation.y += 0.004;
      group.rotation.x += (pointerRef.current.y * 0.2 - group.rotation.x) * 0.06;
      group.rotation.z += (pointerRef.current.x * 0.2 - group.rotation.z) * 0.06;
      const targetScale = activeRef.current ? 1.08 : 1;
      group.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.12);

      layers.forEach((layer, idx) => {
        layer.position.y = idx * 0.4 + Math.sin(time * 1.2 + idx * 0.6) * 0.06;
        const material = layer.material as THREE.MeshPhysicalMaterial;
        material.color.set(activeRef.current ? '#ef2fff' : '#9f47ff');
        material.emissive.set(activeRef.current ? '#38ffe2' : '#ba73ff');
        material.emissiveIntensity = activeRef.current ? 1 : 0.4;
      });

      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
      layers.forEach((layer) => {
        layer.geometry.dispose();
        (layer.material as THREE.Material).dispose();
      });
      renderer.dispose();
    };
  }, [mobile]);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} aria-hidden />;
};

export default memo(LogoScene);
