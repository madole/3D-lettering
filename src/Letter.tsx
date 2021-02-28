import { useBox } from "@react-three/cannon";
import { useLoader } from "react-three-fiber";
import { FontLoader, MathUtils } from "three";
import React from "react";
import degToRad = MathUtils.degToRad;

export function Letter({
  children,
  position,
}: {
  children: string;
  position: [number, number, number];
}) {
  const degrees = Math.floor(Math.random() * 30);
  const mass = Math.floor(Math.random() * 50);

  const [ref] = useBox(() => ({
    mass: mass,
    position,
    rotation: [degToRad(degrees), 0, 0],
  }));
  const font = useLoader(FontLoader, "/font/MSB.json");
  return (
    <mesh ref={ref} receiveShadow={true}>
      <meshPhongMaterial attachArray="material" color="blueviolet" />
      <meshPhongMaterial attachArray="material" color="rebeccapurple" />
      <textGeometry
        name="geometry"
        args={[
          children,
          {
            font,
            size: 20,
            height: 15,
            curveSegments: 10,
            bevelEnabled: true,
            bevelThickness: 1,
            bevelSize: 1,
            bevelOffset: 0,
            bevelSegments: 20,
          },
        ]}
      />
    </mesh>
  );
}
