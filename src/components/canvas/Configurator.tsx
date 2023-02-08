import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Environment, Preload, AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { EffectComposer, DepthOfField } from '@react-three/postprocessing'

export default function Configurator({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped

  return (
    <Canvas dpr={[1, 2]} style={{ paddingLeft: "80px", width: "50%", height: "100%", justifySelf: 'start' }} shadows {...props}>
      <PerspectiveCamera
        far={5}
        makeDefault
        position={[
          0,
          3,
          3
        ]}
        fov={65}
      />

      <Environment background preset="warehouse" blur={1} />

      <AccumulativeShadows
        temporal
        frames={100}
        color="purple"
        colorBlend={2}
        toneMapped={true}
        alphaTest={0.9}
        opacity={1}
        scale={12}
      >
        <RandomizedLight
          amount={8}
          radius={4}
          ambient={0.5}
          intensity={1}
          position={[10, 5, 1]}
          bias={0.001}
        />
      </AccumulativeShadows>

      <EffectComposer multisampling={0} >
        <DepthOfField bokehScale={20} focusDistance={0.1} focalLength={0.6} />
      </EffectComposer>

      {children}

      <Preload all />
    </Canvas >
  )
}
