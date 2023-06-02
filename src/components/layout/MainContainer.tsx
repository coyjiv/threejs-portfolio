import { Inter } from 'next/font/google'

type Props = {
  children: React.ReactNode
}

const inter = Inter({ subsets: ['latin'] })

const MainContainer = (props: Props) => {
  return (
    <main
      className={`flex overflow-x-hidden min-h-screen flex-col items-center  py-10 lg:p-24 lg:pt-14 lg:pb-9 ${inter.className}`}
    >
      {props.children}
    </main>
  )
}

export default MainContainer
