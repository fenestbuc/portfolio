"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const count = 400;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.03;
    meshRef.current.rotation.x = time * 0.01;
    meshRef.current.rotation.y += (mouseRef.current.x * 0.1 - meshRef.current.rotation.y) * 0.02;
    meshRef.current.rotation.x += (mouseRef.current.y * 0.1 - meshRef.current.rotation.x) * 0.02;
  });

  React.useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function FloatingLines() {
  const groupRef = useRef<THREE.Group>(null);

  const lines = useMemo(() => {
    return Array.from({ length: 20 }).map(() => ({
      points: [
        new THREE.Vector3((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10),
        new THREE.Vector3((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10),
      ],
      speed: Math.random() * 0.002 + 0.001,
      offset: Math.random() * Math.PI * 2,
    }));
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.children.forEach((child, i) => {
      child.rotation.x = Math.sin(t * lines[i].speed + lines[i].offset) * 0.2;
      child.rotation.y = Math.cos(t * lines[i].speed + lines[i].offset) * 0.2;
    });
  });

  return (
    <group ref={groupRef}>
      {lines.map((line, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array([line.points[0].x, line.points[0].y, line.points[0].z, line.points[1].x, line.points[1].y, line.points[1].z]), 3]}
              count={2}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#333333" transparent opacity={0.3} />
        </line>
      ))}
    </group>
  );
}

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <Particles />
        <FloatingLines />
      </Canvas>
    </div>
  );
}
