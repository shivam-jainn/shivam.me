import React from 'react'
import ladingImage from '../public/heading-sj-neat.svg'
export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center h-full '>
      <div className='p-2'>

        <img src={ladingImage} alt="A landing image" />
      </div>

        <div className='items-center my-4 '>
            <h1 className='max-w-fit p-2 font-bold mx-3 text-7xl paintbg-gradient hover:text-transparent hover:bg-clip-text'>Design</h1>
            <h1 className='max-w-fit p-2 font-bold  text-7xl   paintbg-gradient hover:text-transparent hover:bg-clip-text'>Develop</h1>
            <h1 className='max-w-fit p-2 font-bold mx-5  text-7xl paintbg-gradient hover:text-transparent hover:bg-clip-text'>Deploy</h1>
        </div>
    </div>
  )
}
