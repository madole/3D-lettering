import {Reflector, useTexture} from "@react-three/drei";
import {usePlane} from "@react-three/cannon";
import React from "react";

export function Ground() {
    const rough = useTexture('/rough.jpg')
    const [ref] = usePlane(() => ({rotation: [-Math.PI / 2, 0, 0]}))
    return (
        <Reflector
            // @ts-ignore
            ref={ref}
            blur={[10, 10]} // Blur ground reflections (width, height), 0 skips blur
            mixBlur={1.0} // How much blur mixes with surface roughness
            mixStrength={0.5} // Strength of the reflections
            resolution={1028} // Off-buffer resolution, lower=faster, higher=better quality
            args={[500, 1000]} // PlaneBufferGeometry arguments
            mirror={1} // Mirror environment, 0 = texture colors, 1 = pick up env colors
            minDepthThreshold={0.75} // Lower edge for the depthTexture interpolation (default = 0)
            maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
            depthScale={2} // Scale the depth factor (0 = no depth, default = 0)
            depthToBlurRatioBias={5} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
            debug={0} /* Depending on the assigned value, one of the following channels is shown: */
        >
            {(Material, props) => (<Material  {...props} normalMap={rough}/>)}
        </Reflector>
    )

}