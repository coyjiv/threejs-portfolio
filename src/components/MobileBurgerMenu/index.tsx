import React from 'react'
import BurgerIcon from '../svg/BurgerIcon'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useOnClickOutside } from 'usehooks-ts'

type Props = {}

const MobileBurgerMenu = (props: Props) => {
  const ref = React.useRef(null)
  const [isOpen, setIsOpen] = React.useState(false)
  useOnClickOutside(ref, () => setIsOpen(false))
  return (
    <>
      <motion.button
        initial={{ backgroundColor: 'rgba(163, 230, 53, 0)', shadow: 'none' }}
        animate={{
          backgroundColor: isOpen
            ? 'rgba(163, 230, 53, 0.8)'
            : 'rgba(163, 230, 53, 0)',
          shadow: isOpen ? 'rgb(132 204 22 / 0.5)' : 'none',
        }}
        transition={{
          duration: 0.3,
          type: 'spring',
          stiffness: 200,
          damping: 20,
        }}
        onClick={() => setIsOpen(!isOpen)}
        className={`lg:hidden  hover:shadow-md hover:bg-lime-400 hover:shadow-lime-900 p-2 h-fit`}
      >
        <BurgerIcon />
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.3,
                type: 'spring',
                stiffness: 200,
                damping: 20,
              }}
              className='fixed w-screen h-screen top-0 left-0 bg-black z-[1]'
            ></motion.div>
            <motion.nav
              initial={{
                opacity: 0,
                y: -100,
                left: '50%',
                top: '50%',
                translateX: '-50%',
                translateY: '-50%',
                skewY: '0deg',
              }}
              animate={{ opacity: 1, y: 0, skewY: '10deg' }}
              exit={{ opacity: 0, y: -100, skewY: '0deg' }}
              transition={{
                duration: 0.3,
                type: 'spring',
                stiffness: 200,
                damping: 20,
              }}
              className='fixed top-0 left-1/2 -translate-x-1/2 w-[60%] h-64 border-[1px] border-white/80 z-50 p-1 flex flex-col justify-center items-center'
              ref={ref}
            >
              <ul className='flex flex-col justify-center text-2xl items-start gap-5'>
                <li className='-skew-y-12 '>
                  <Link
                    className='border-b border-white/0 hover:border-white transition-all pb-2 '
                    href={'/about'}
                  >
                    About
                  </Link>
                </li>
                <li className='-skew-y-12 '>
                  <Link
                    className='border-b border-white/0 hover:border-white transition-all pb-2 '
                    href={'/articles'}
                  >
                    Articles
                  </Link>
                </li>
                <li className='-skew-y-12 '>
                  <Link
                    className='border-b border-white/0 hover:border-white transition-all pb-2 '
                    href={'/projects'}
                  >
                    Projects
                  </Link>
                </li>
                <li className='-skew-y-12 '>
                  <Link
                    className='border-b border-white/0 hover:border-white transition-all pb-2 '
                    href={'/uses'}
                  >
                    Uses
                  </Link>
                </li>
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileBurgerMenu
