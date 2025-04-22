import React from 'react'
import HeroImg from '../../assets/img1.gif';


const Hero = () => {
  return (
    <div className='flex justify-center'>
      <div className='container pbp'>
        <div className='grid grid-cols-1 md:grid-cols-2 min-h-[600px]'>
          {/* Text Content Section */}
          <div className='space-y-5 flex flex-col justify-center item-center text-center md:text-left py-20 px-10 md:py-0 md:px-0 md:items-start'>
            <h1 className='text-4xl xl:text-5xl font-bold'>Unlock a Passion, Slide Hustle, or New
              <span className='text-gray-400 underline'> Profession</span>
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit molestias libero, dignissimos iure repellendus magnam hic accusantium rem alias, eaque aperiam? Quod, voluptate.</p>
            <button className='primary-btn'>Request For Quotes</button>
          </div>
          {/* Hero Image Section */}
          <div className='flex justify-center items-center'>
            <img src={HeroImg} alt="" className='w-[80%] md:w-[550px] xl:w-[600px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero