import React from 'react'
import Link from 'next/link'
import Avatar from '../Avatar'
import MobileBurgerMenu from '../MobileBurgerMenu'

type Props = {
  el?: HTMLDivElement | null
}

const Header = ({el}: Props) => {
  console.dir(el);
  
  return (
    <header className='w-full relative z-40'>
      <nav className='flex justify-between items-center mx-5'>
        <Link href={'/'} onClick={e=>{e.preventDefault(); if(el)el.scrollTo({top:0, behavior: 'smooth'})}}>
            <Avatar/>
        </Link>
        <MobileBurgerMenu/>
        <ul className='hidden lg:flex justify-center items-center gap-5'>
          <li>
            <Link href={'/about'} className='border-b border-white/0 hover:border-white transition-all pb-2 '>About</Link>
          </li>
          <li>
            <Link href={'/articles'} className='border-b border-white/0 hover:border-white transition-all pb-2 '>Articles</Link>
          </li>
          <li>
            <Link href={'/projects'} className='border-b border-white/0 hover:border-white transition-all pb-2 '>Projects</Link>
          </li>
          <li>
            <Link href={'/uses'} className='border-b border-white/0 hover:border-white transition-all pb-2 '>Uses</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
