'use client';
import React from 'react'
import { LampContainer } from "./ui/lamp";
import { TextGenerateEffect } from "./ui/text-generate-effect";
const words = `Hello, I'm BIJAY KUMAR NAYAK, a passionate frontend developer with a strong foundation in HTML, CSS, and modern frameworks like Tailwind, React, Redux, and Node.js. Through hands-on experience and dedicated learning, I've honed my skills to craft dynamic and visually appealing web applications.`;
const About = () => {
  return (
    <div id='about'>
      <LampContainer>
        <h1 className='text-center text-4xl font-bold'>About Me</h1>
        <TextGenerateEffect words={words} />
      </LampContainer>
    </div>
  )
}
export default About
