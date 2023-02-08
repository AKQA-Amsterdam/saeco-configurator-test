// @ts-nocheck
import { useRef, useState } from 'react'
import { proxy, subscribe, useSnapshot } from "valtio"
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { CiCoffeeBean, CiKeyboard, CiLocationOn } from 'react-icons/ci';

import GranAroma from "../components/canvas/models/GranAroma"
import GranAromaDeluxe from "../components/canvas/models/GranAromaDeluxe"
import XelsisDeluxe from "../components/canvas/models/XelsisDeluxe"
import XelsisSuprema from "../components/canvas/models/XelsisSuprema"

const state = proxy({
  activeIndex: 3,
  color: 'white',
})

export default function Page(props) {

  const { color } = useSnapshot(state)

  return (
    <>
      <div className="absolute flex justify-between w-1/2 top-1/2 z-[99999999999] -translate-y-1/2">
        <button className="px-6 py-10 mx-20 rounded-r-lg bg-brown-light/50 hover:bg-brown-light" onClick={() => state.activeIndex--}>
          <BsArrowLeft />
        </button>
        <button className="px-6 py-10 rounded-l-lg bg-brown-light/50 hover:bg-brown-light" onClick={() => state.activeIndex++}>
          <BsArrowRight />
        </button>
      </div>
      <div className="flex flex-col self-end justify-between w-1/2 h-screen px-20 py-20" >
        <div className="mt-d">
          <h1 className="text-8xl text-brown-dark">
            Xelsis Deluxe
          </h1>
          <h2 className="pt-5 text-4xl font-extralight text-brown-dark/70">
            Personalized perfection in every brew
          </h2>
        </div>
        <div className="flex items-center gap-x-4">
          <p className="text-brown-dark/70">Colors</p>
          <div className="flex px-2 py-2 bg-white rounded-full gap-x-2">
            <button className="w-6 h-6 bg-black rounded-full" onClick={() => {
              state.color = 'white';
            }}></button>
            <button className="w-6 h-6 bg-red-400 rounded-full" onClick={() => {
              state.color = 'red';
            }}></button>
            <button className="w-6 h-6 bg-orange-400 rounded-full" onClick={() => {
              state.color = 'blue';
            }}></button>
            <button className="w-6 h-6 rounded-full bg-amber-400" onClick={() => {
              state.color = 'green';
            }}></button>
            <button className="w-6 h-6 bg-yellow-400 rounded-full" onClick={() => {
              state.color = 'purple';
            }}></button>
            <button className="w-6 h-6 rounded-full bg-lime-400" onClick={() => {
              state.color = 'cyan';
            }}></button>
          </div>
          {color !== 'white' && (
            <p className="text-red-400">⚠️ Need real materials from 3d artist to make this look good, this is just a cheap (ugly) way to show that changing it is possible</p>
          )}
        </div>
        <div className="flex flex-col max-w-lg text-brown-dark/70 gap-8">
          {/* <p>Advanced personalisation in our most advanced coffee machines ever.</p> */}
          <ul className="flex flex-col gap-4">
            <li className="flex px-4 py-2 bg-white rounded-full gap-4 place-items-center">
              <CiKeyboard size={32} />
              <p>7.84’’ color touchscreen display</p>
            </li>
            <li className="flex px-4 py-2 bg-white rounded-full gap-4 place-items-center">
              <CiCoffeeBean size={32} />
              <p>22 classic beverages with seasonal coffee varieties</p>
            </li>
            <li className="flex px-4 py-2 bg-white rounded-full gap-4 place-items-center">
              <CiLocationOn size={32} />
              <p>Made in Italy</p>
            </li>
          </ul>
        </div>
        <div className="flex max-w-md gap-1">
          <div className="flex items-center text-white place-content-center grow bg-brown-dark">Buy Now</div>
          <div className="flex items-center py-4 place-content-center grow text-brown-dark">More Info</div>
        </div>
      </div>
    </>
  )
}

const Canvas = () => {
  const { activeIndex } = useSnapshot(state)
  const productRadius = 0.8;

  const cameraRadius = 1.5;

  const groupRef = useRef(null);

  const granaromaRef = useRef(null);
  const granaromaDeluxeRef = useRef(null);
  const xelsisDeluxeRef = useRef(null);
  const xelsisSupremaRef = useRef(null);

  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        Math.sin(activeIndex * (Math.PI / 2)) * cameraRadius,
        Math.min(state.pointer.y / 20 + 0.35, 0.75),
        Math.cos(activeIndex * (Math.PI / 2)) * cameraRadius + Math.min(state.pointer.x / 20, 0.04) - 0.03,
      ],
      0.25,
      delta,
      1
    )

    state.camera.lookAt(0, 0, 0)
  })


  return (
    <group ref={groupRef}>
      <GranAroma
        state={state}
        active={activeIndex === 0}
        ref={granaromaRef}
        position-x={Math.sin(0 * (Math.PI / 2)) * productRadius}
        position-z={Math.cos(0 * (Math.PI / 2)) * productRadius}
        rotation-y={0 * (Math.PI / 2) - 0.3}
      />
      <GranAromaDeluxe
        state={state}
        active={activeIndex === 1}
        ref={granaromaDeluxeRef}
        position-x={Math.sin(1 * (Math.PI / 2)) * productRadius}
        position-z={Math.cos(1 * (Math.PI / 2)) * productRadius}
        rotation-y={1 * (Math.PI / 2) - 0.3}
      />
      <XelsisDeluxe
        state={state}
        active={activeIndex === 2}
        ref={xelsisDeluxeRef}
        position-x={Math.sin(2 * (Math.PI / 2)) * productRadius}
        position-z={Math.cos(2 * (Math.PI / 2)) * productRadius}
        rotation-y={2 * (Math.PI / 2) - 0.3}
      />
      <XelsisSuprema
        state={state}
        active={activeIndex === 3}
        ref={xelsisSupremaRef}
        position-x={Math.sin(3 * (Math.PI / 2)) * productRadius}
        position-z={Math.cos(3 * (Math.PI / 2)) * productRadius}
        rotation-y={3 * (Math.PI / 2) - 0.3}
      />
    </group>
  )
}

Page.canvas = (props) => <Canvas {...props} />

export async function getStaticProps() {
  return {
    props: {}
  }
}
