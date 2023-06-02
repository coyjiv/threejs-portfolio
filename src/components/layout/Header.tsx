import React from 'react'
import Link from 'next/link'
import Avatar from '../Avatar'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
const  MobileBurgerMenu = dynamic(()=> import('../MobileBurgerMenu')) 

type Props = {
  el?: HTMLDivElement | null
}

const Header = ({ el }: Props) => {
  const pathName = useRouter().pathname

  console.log(pathName)
  

  return (
    <header className='w-full relative z-40'>
      <nav className='flex justify-between items-center mx-5'>
        <Link
          href={'/'}
          onClick={(e) => {
            if (el) {
              e.preventDefault()
              el.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
        >
          <Avatar />
        </Link>
        <MobileBurgerMenu />
        <ul className='hidden lg:flex justify-center items-center gap-5'>
          <li>
            <Link
              href={'/about'}
              className={`border-b border-white/0 hover:border-white transition-all pb-2 ${pathName === '/about' ? 'border-white' : ''} `}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={'/articles'}
              className={`border-b border-white/0 hover:border-white transition-all pb-2 ${pathName === '/articles' ? 'border-white' : ''} `}
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              href={'/projects'}
              className={`border-b border-white/0 hover:border-white transition-all pb-2 ${pathName === '/projects' ? 'border-white' : ''} `}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href={'/contact'}
              className={`border-b border-white/0 hover:border-white transition-all pb-2 ${pathName === '/contact' ? 'border-white' : ''} `}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
