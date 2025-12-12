import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>We are regular students who came together with a simple idea: to turn our final-year capstone project into something real. What started as a technical challenge quickly grew into a passion to create a better online shopping experience.</p>
          <p>The result is Shoppiyo , a dropshipping e-commerce platform built on a foundation of innovation and trust. We didn't just want to build another website; we wanted to solve real problems. That's why our platform is powered by a unique Automated fraud detection system, designed from the ground up to ensure every customer's privacy and provide the best service possible.</p>
          <p>Shoppiyo is more than just a store; it's a testament to what's possible when technology is used for good. We’re committed to offering a curated selection of products while providing a secure and seamless journey for every person who shops with us. Thank you for being a part of our story.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>We're on a mission to bring innovative solutions to the world of e-commerce, ensuring that every product you find on Shoppiyo is a testament to quality, creativity, and secure shopping.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience: </b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
