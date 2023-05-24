import { useFrame } from "@react-three/fiber"
import { memo, useRef } from "react"
import {editable as e} from '@theatre/r3f'
import { motion } from "framer-motion-3d"

 function Torus(props: any) {
    const variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }
  
    const mesh = useRef<any>()
    const rotation = useRef(0)
  
    useFrame((state, delta) => {
      rotation.current += delta * (props.roundAnimation ? 0.5 : -0.5)
      if (mesh.current) {
        mesh.current.rotation.z = rotation.current
      }
    })
  
    return (
      <e.mesh theatreKey='torus' {...props} ref={mesh}>
        <torusGeometry args={props.args ?? [2, 2, 2]} />
        <motion.meshStandardMaterial
          wireframe={props.wireframe ?? true}
          initial='hidden'
          animate='visible'
          variants={variants}
        />
      </e.mesh>
    )
  }

  export default memo(Torus)