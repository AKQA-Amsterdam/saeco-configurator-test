/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 GranAroma.glb --transform
*/

// @ts-nocheck

import { Html, useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import type { Ref } from 'react'
import type { Group } from 'three'

export default forwardRef(function GranAroma(props, ref: Ref<Group>) {
  let { nodes, materials } = useGLTF('models/GranAroma.glb')

  materials.GranAroma_normal.map = null;
  materials.GranAroma_normal.metalnessMap = null;
  materials.GranAroma_normal.roughnessMap = null;
  materials.GranAroma_normal.normalMap = null;

  return (
    <group
      ref={ref}
      position-z={-0.05}
      {...props}
      dispose={null}
    >
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh>
          <Html scale={100} rotation={[Math.PI / 2, 0, 0]} position={[180, -350, 50]} transform occlude>
            <div className="annotation">
              6.550 $ <span style={{ fontSize: '1.5em' }}>🥲</span>
            </div>
          </Html>
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Block_01009.geometry} material={materials.GranAroma_normal} />
        <mesh castShadow receiveShadow geometry={nodes.Block_01009_1.geometry} material={materials['Transparent plastic.004']} />
        <mesh geometry={nodes.Block_01009_2.geometry} material={materials['black.001']} />
        <mesh geometry={nodes.Block_01009_3.geometry} material={materials['milk container label.003']} />
        <mesh receiveShadow geometry={nodes.Block_01009_4.geometry} material={materials['milk.003']} />
      </group>
    </group>
  )
})

useGLTF.preload('/models/GranAroma.glb')
