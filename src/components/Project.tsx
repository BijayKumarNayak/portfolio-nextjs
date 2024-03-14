'use client';
import React from 'react'
import { PinContainer } from "./ui/3d-pin";

import portfolioImg from "../../public/images/portfolio.png"
import landingpageImg from "../../public/images/landingpage.png"
import geminiImage from "../../public/images/gemini.png"
import Image from 'next/image';

const Project = () => {
    return (
        <div className='p-10 flex flex-col justify-center items-center gap-10' id='project'>
            <h1 className='font-bold text-2xl text-center'>Projects</h1>
            <div className='grid grid-cols-3 place-content-center gap-5'>
                <a href="https://gemini-clone-alpha.vercel.app/" target='_blank' >
                    <PinContainer
                        title="Gemini"

                    >
                        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                Gemini Clone
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal">
                                {/* <span className="text-slate-500 ">
                            Customizable Tailwind CSS and Framer Motion Components.
                        </span> */}
                            </div>
                            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                            <Image src={geminiImage} alt="moviex Image" width={300} height={300} className='h-full w-full object-fill' />

                        </div>
                    </PinContainer>
                </a>
                <a href="https://portfolio-one-psi-71.vercel.app/" target='_blank' >
                    <PinContainer
                        title="Portfolio"

                    >
                        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                Portfolio
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal">
                                {/* <span className="text-slate-500 ">
                            Customizable Tailwind CSS and Framer Motion Components.
                        </span> */}
                            </div>
                            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                            <Image src={portfolioImg} alt="Portfolio Image" width={300} height={300} className='h-full w-full object-fill' />
                        </div>
                    </PinContainer>
                </a>
                <a href="https://password-generator-ten-beige.vercel.app/" target='_blank' >
                    <PinContainer
                        title="Landing Page"

                    >
                        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                Landing Page
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal">
                                {/* <span className="text-slate-500 ">
                            Customizable Tailwind CSS and Framer Motion Components.
                        </span> */}
                            </div>
                            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                            <Image src={landingpageImg} alt="landingPage Image" width={300} height={300} className='h-full w-full object-fill' />
                        </div>
                    </PinContainer>
                </a>
            </div>
        </div>
    )
}

export default Project
