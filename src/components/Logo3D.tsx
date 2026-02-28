import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, RoundedBox } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useMemo, useRef, useState } from 'react';
import type { Group, Mesh } from 'three';
import { useMediaQuery } from '../hooks/useMediaQuery';

const tags = [
  'Pixel Perfect UI',
  'High Performance',
  'Scalable Architecture',
  'Modern React Stack',
  'Cost Effective Solutions',
];

const LayerStack = ({ active }: { active: boolean }) => {
  const group = useRef<Group>(null);
  const meshes = useRef<Mesh[]>([]);

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    group.current.rotation.y = clock.getElapsedTime() * 0.3;
    group.current.rotation.x = pointer.y * 0.18;
    group.current.rotation.z = pointer.x * 0.12;

    meshes.current.forEach((mesh, idx) => {
      if (!mesh) return;
      mesh.position.y = idx * 0.26 + Math.sin(clock.elapsedTime * 1.8 + idx) * 0.04;
      mesh.scale.setScalar(active ? 1.04 : 1);
    });
  });

  const layers = useMemo(() => Array.from({ length: 5 }), []);

  return (
    <group ref={group}>
      {layers.map((_, idx) => (
        <Float key={idx} speed={1 + idx * 0.2} rotationIntensity={0.15} floatIntensity={0.3}>
          <RoundedBox
            ref={(el) => {
              if (el) meshes.current[idx] = el;
            }}
            args={[1.6 - idx * 0.18, 0.14, 1.1 - idx * 0.12]}
            radius={0.06}
            smoothness={4}
            position={[0, idx * 0.25, 0]}
          >
            <meshPhysicalMaterial
              color={idx % 2 === 0 ? '#b725ff' : '#12d8c8'}
              metalness={0.15}
              roughness={0.18}
              transmission={0.82}
              thickness={1.3}
              emissive={idx % 2 === 0 ? '#8a1bc2' : '#0fa597'}
              emissiveIntensity={active ? 1.15 : 0.55}
              clearcoat={1}
            />
          </RoundedBox>
        </Float>
      ))}
    </group>
  );
};

const Logo3D = () => {
  const [active, setActive] = useState(false);
  const mobile = useMediaQuery('(max-width: 768px)');

  return (
    <div
      className="logo-wrap"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      aria-label="Interactive 3D LeanFront logo"
    >
      <motion.div animate={{ scale: active ? 1.03 : 1 }} transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}>
        <Canvas camera={{ position: [0, 1.2, 3.2], fov: mobile ? 55 : 45 }} dpr={[1, 2]}>
          <ambientLight intensity={0.35} />
          <directionalLight position={[2, 3, 2]} intensity={1.7} color="#cb7aff" />
          <pointLight position={[-2, -1, -1]} intensity={1.2} color="#12d8c8" />
          <LayerStack active={active} />
          <Environment preset="city" />
        </Canvas>
      </motion.div>

      <div className="feature-tags" aria-hidden={!active}>
        {tags.map((tag, idx) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: active ? 1 : 0, y: active ? 0 : 10 }}
            transition={{ delay: idx * 0.05, duration: 0.22 }}
            className={`tag tag-${idx + 1}`}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default Logo3D;
