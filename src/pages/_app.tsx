import Layout from '@/components/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Suspense } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Suspense
      fallback={
        <Suspenser />
      }
    >
      <Layout><Component {...pageProps} /></Layout>
    </Suspense>
  )
}

const Suspenser = () => (
  <div className='h-full w-full absolute flex gap-3 items-center justify-center'>
    <h1>Loading</h1>
    <div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        className=' fill-white animate-spin text-white'
      >
        &gt;
        <path
          d='M10.14 1.16a11 11 0 00-9 8.92A1.59 1.59 0 002.46 12a1.52 1.52 0 001.65-1.3 8 8 0 016.66-6.61A1.42 1.42 0 0012 2.69a1.57 1.57 0 00-1.86-1.53z'
          className='spinner_P7sC'
        ></path>
      </svg>
    </div>
  </div>
)