import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import {editable as e} from '@theatre/r3f'
import { motion } from "framer-motion-3d"


export default function Sphere(props: any) {
    const mesh = useRef<any>()
    useFrame((state, delta) => (mesh.current.rotation.z += delta * -0.2))
    return (
      <e.mesh theatreKey='sphere' {...props} ref={mesh}>
        <sphereGeometry args={[20, 20, 20]} />
        <motion.meshStandardMaterial initial='hidden' animate='visible' />
      </e.mesh>
    )
  }
  