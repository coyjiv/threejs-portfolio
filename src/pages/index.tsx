import Header from '@/components/layout/Header'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useRef, useState } from 'react'
import { getProject, val } from '@theatre/core'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import { editable as e, SheetProvider, useCurrentSheet } from '@theatre/r3f'
import theatre from '@/theatre'
import demoProjectState from '@/assets/DemoProject.theatre-project-state1.json'
import {
  AdaptiveDpr,
  Scroll,
  ScrollControls,
  useScroll,
} from '@react-three/drei'
import {
  EffectComposer,
  Bloom,
  Glitch,
  Noise,
} from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { TrackedTypedHeading } from '@/components/TrackedTypedHeading'
import Scene from '@/components/Scene'
import { Loader } from '@/components/Loader'
import MainContainer from '@/components/layout/MainContainer'

// if (
//   process.env.NODE_ENV === 'development' &&
//   !theatre.isInit &&
//   typeof window !== 'undefined'
// ) {
//   studio.initialize()
//   studio.extend(extension)
// }
// const demoSheet = getProject('Demo Project', {state: demoProjectState}).sheet('Demo Sheet')

export default function Home() {
  // const demoSheet = getProject('Demo Project').sheet('Demo Sheet')
  const [demoSheet, setDemoSheet] = useState<any>(null)
  const [scrollContainer, setScrollContainer] = useState<HTMLDivElement | null>()

  useEffect(() => {
    const demoProject = getProject('Demo Project', { state: demoProjectState })
    const sheet = demoProject.sheet('Demo Sheet')
    setDemoSheet(sheet)
  }, [])

  if (!demoSheet) return null

  return (
        <section className='p-10 px-4'>
          <div className='absolute w-full  h-full  top-0 left-0'>
            {/* <Suspense fallback={'Loading'}> */}
              <Canvas camera={{}}>
                <Loader />
              <AdaptiveDpr pixelated />
                <SheetProvider sheet={demoSheet}>
                  <ScrollControls pages={3} damping={0.1}>
                    <Scroll>
                      <Scene setScrollContainer={setScrollContainer} />
                    </Scroll>
                    <Scroll html>
                      <TrackedTypedHeading
                        textClassName='font-bold text-2xl sm:text-5xl'
                        text='Hi, my name is Daniil.'
                        className='top-[100vh]'
                        sentimentelOffset={200}
                      />
                      <TrackedTypedHeading
                        textClassName='font-bold text-2xl sm:text-5xl tracking-wider'
                        textWrapperClassName='w-[80vw] translate-x-[30px] sm:w-[40vw] sm:translate-x-[240px] sm:translate-y-[100px] bg-black/50 sm:bg-transparent p-3'
                        text="I'm a front-end developer, 3D Artist and musician based in Lodz."
                        className='top-[150vh] sm:left-52'
                        sentimentelOffset={200}
                      />
                      <TrackedTypedHeading
                        text='I have a passion for creating beautiful and functional user experiences.'
                        className='top-[185vh] sm:top-[180vh] '
                        textClassName='text-xl sm:text-5xl font-[100]'
                        textWrapperClassName='w-[80vw] translate-x-[60px] sm:w-[40vw] sm:translate-x-[300px] sm:translate-y-[100px] gap-1'
                        sentimentelOffset={200}
    
                      />
                      <TrackedTypedHeading
                        small
                        text='If you want to know more, check the other pages'
                        className='top-[240vh]'
                        textClassName='text-2xl'
                        textWrapperClassName='mx-5 font-ds justify-center sm:justify-start'
                        sentimentelOffset={200}
    
                      />
                    </Scroll>
                  </ScrollControls>
                  <EffectComposer>
                    <Bloom intensity={10} />
                    <Noise premultiply blendFunction={BlendFunction.ADD} />
                  </EffectComposer>
                </SheetProvider>
              </Canvas>
            {/* </Suspense> */}
          </div>
        </section>

  )
}
