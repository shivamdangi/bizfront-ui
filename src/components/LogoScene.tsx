import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, RoundedBox } from '@react-three/drei';
import { MotionValue, motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

const featureTags = [
  'Pixel Perfect UI',
  'High Performance',
  'Scalable Architecture',
  'Modern React Stack',
  'Cost Effective Solutions',
];

type SymbolProps = {
  hovered: boolean;
  pointer: { x: MotionValue<number>; y: MotionValue<number> };
};

const LayeredSymbol = ({ hovered, pointer, mobile }: SymbolProps & { mobile: boolean }) => {
  const group = useRef<THREE.Group>(null);
  const layers = useMemo(() => (mobile ? [0, 1, 2] : [0, 1, 2, 3, 4]), [mobile]);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.26 + pointer.x.get() * 0.004;
    group.current.rotation.x = Math.sin(t * 0.45) * 0.07 + pointer.y.get() * 0.003;
    group.current.scale.lerp(new THREE.Vector3(hovered ? 1.08 : 1, hovered ? 1.08 : 1, hovered ? 1.08 : 1), 0.08);
  });

  return (
    <group ref={group}>
      {layers.map((layer) => (
        <Float key={layer} speed={1.2 + layer * 0.15} rotationIntensity={0.2} floatIntensity={0.8}>
          <RoundedBox
            args={[1.9 - layer * 0.16, 0.2, 1.2 - layer * 0.1]}
            radius={0.08}
            smoothness={4}
            position={[0, -0.56 + layer * 0.3, 0]}
          >
            <meshPhysicalMaterial
              color="#f5f5f7"
              emissive="#d946ef"
              emissiveIntensity={hovered ? 0.55 : 0.23}
              metalness={0.12}
              roughness={0.18}
              transmission={0.75}
              ior={1.28}
              thickness={0.7}
              transparent
              opacity={0.95}
            />
          </RoundedBox>
        </Float>
      ))}
    </group>
  );
};

export const LogoScene = ({ pointer }: { pointer: { x: MotionValue<number>; y: MotionValue<number> } }) => {
  const [hovered, setHovered] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 680px)');
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return (
    <div
      className="logo-wrapper"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="LeanFront 3D symbol"
      role="img"
    >
      <Canvas camera={{ position: [0, 1, 4], fov: 48 }} dpr={[1, 1.7]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 3, 4]} intensity={2.2} color="#6ee7d8" />
        <pointLight position={[-3, 2, -2]} intensity={hovered ? 2.2 : 1.2} color="#d946ef" />
        <LayeredSymbol hovered={hovered} pointer={pointer} mobile={mobile} />
        <Environment preset="city" />
      </Canvas>

      <div className="feature-tag-layer" aria-hidden={!hovered}>
        {featureTags.map((tag, index) => (
          <motion.span
            className="feature-tag"
            key={tag}
            initial={{ opacity: 0, y: 10, scale: 0.94 }}
            animate={hovered ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.94 }}
            transition={{ duration: 0.24, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
            style={{
              left: `${14 + ((index * 19) % 70)}%`,
              top: `${12 + ((index * 27) % 74)}%`,
            }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </div>
  );
};
