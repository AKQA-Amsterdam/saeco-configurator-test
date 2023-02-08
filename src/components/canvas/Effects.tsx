import { EffectComposer, DepthOfField } from '@react-three/postprocessing'

export default function Effects(props) {
  return (
    <EffectComposer multisampling={0} >
      <DepthOfField bokehScale={10} focusDistance={0.1} focalLength={0.75} />
    </EffectComposer>
  )
}



