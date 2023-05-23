import Image from 'next/image'
import React from 'react'

type Props = {}

const Avatar = (props: Props) => {
  return (
    <div className='w-10 h-10  rounded-full relative border-wh '>
      <div className='w-10 h-10 from-indigo-200 to-lime-400 bg-gradient-to-t rounded-full flex justify-center items-center'>
       <div className='w-10 h-10 p-[2px] overflow-clip -translate-y-[0.5px] '>
            <Image
              src={'/me.webp'}
              width={200}
              height={200}
              alt={'avatar'}
              className={'w-full h-full object-cover rounded-full'}
            />
       </div>
      </div>
    </div>
  )
}

export default Avatar
