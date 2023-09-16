import { Gltf, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { val } from "@theatre/core"
import { PerspectiveCamera, useCurrentSheet } from "@theatre/r3f"
import {editable as e} from '@theatre/r3f'
import { useEffect } from "react"
import Sphere from "../geometries/Sphere"
import Torus from "../geometries/Torus"


export default function Scene(props: any) {
    const sheet = useCurrentSheet()
    const scroll = useScroll()

    useEffect(()=>{
        if(scroll.el){
            props.setScrollContainer(scroll.el)
        }
    }
    , [props, scroll.el])

    useFrame(() => {
      if (sheet) {
        const sequenceLength = val(sheet.sequence.pointer.length)
  
        sheet.sequence.position = scroll.offset * sequenceLength
      }
    })
    return (
      <>
        <PerspectiveCamera
          theatreKey='Camera1'
          makeDefault
          attachArray={undefined}
          attachObject={undefined}
          attachFns={undefined}
        />
        <e.pointLight theatreKey='Light' position={[10, 10, 10]} />
        <Torus position={[-1.2, 0, 0]} />
        <Torus position={[-1.2, 0, 0]} theatreKey={'nimb'} roundAnimation />
        {/* <Sphere /> */}
        <e.pointLight theatreKey='addLight' position={[10, 10, 10]} />
        <e.group theatreKey='model'>
          <Gltf src='/nastka1.gltf' castShadow receiveShadow />
        </e.group>
      </>
    )
  }