'use client';
import React from 'react'
import { LampContainer } from "./ui/lamp";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import avatar from "../../public/images/avatar.png"
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';
const words = `Hello, I'm BIJAY KUMAR NAYAK, a passionate frontend developer with a strong foundation in HTML, CSS, and modern frameworks like Tailwind, React, Redux, and Node.js. Through hands-on experience and dedicated learning, I've honed my skills to craft dynamic and visually appealing web applications.`;
const About = () => {
  return (
    <div id='about'>
     <BackgroundBeamsWithCollision className='px-10'>
        <div className='grid grid-cols-2 items-center'>
          <div >
            <Image src={avatar} alt='avatar image' height={400} width={400} className='border-2 border-sky-500 rounded-full p-3' />
          </div>
          <div>
            <TextGenerateEffect words={words} />
          </div>
        </div>
      </BackgroundBeamsWithCollision>

    </div>
  )
}
export default About
