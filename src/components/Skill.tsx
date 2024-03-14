'use client';
import Image from "next/image";
import React from "react";
import htmlImg from "../../public/images/html.png"
import cssImg from "../../public/images/css.png"
import javascriptImg from "../../public/images/javascript.png"
import tailwindImg from "../../public/images/tailwind.png"
import reactImg from "../../public/images/react.png"
import nodeImg from "../../public/images/node.png"
import expressImg from "../../public/images/express.png"
import mongoImg from "../../public/images/mongodb.png"

import { Button } from "./ui/moving-border";
const Skill = () => {
  return (
    <div className="p-10 flex flex-col items-center gap-10" id="skill">
      <h1 className="fw-bold  text-4xl text-center ">Skills</h1>
      <div className="grid grid-cols-4 gap-10  content-center place-content-center  ">

        <Button
          borderRadius="1rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 flex flex-col items-center   "
        >
          <h3 className="font-semibold text-lg ">HTML</h3>
          <div className="min-h-20 min-w-20 overflow-hidden flex justify-center">
            <Image src={htmlImg} alt="html logo" height={100} width={100} className="object-contain" />
          </div>

        </Button>
        <Button
          borderRadius="1rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 flex flex-col items-center "
        >
          <h3 className="font-semibold text-lg ">CSS</h3>
          <div className="min-h-20 min-w-20 overflow-hidden flex justify-center">
            <Image src={cssImg} alt="css logo" height={100} width={100} className="object-contain" />
          </div>

        </Button>
        <Button
          borderRadius="1rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 flex flex-col items-center "
        >
          <h3 className="font-semibold text-lg ">TAILWIND</h3>
          <div className="min-h-28 min-w-28 overflow-hidden flex justify-center">
            <Image src={tailwindImg} alt="tailwind logo" height={100} width={100} className="object-contain" />
          </div>

        </Button>
        <Button
          borderRadius="1rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 flex flex-col items-center "
        >
          <h3 className="font-semibold text-lg ">JAVASCRIPT</h3>
          <div className="min-h-28 min-w-28 overflow-hidden flex justify-center">
            <Image src={javascriptImg} alt="javascript logo" height={100} width={100} className="object-contain" />
          </div>

        </Button>
        <Button
          borderRadius="1rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 flex flex-col items-center "
        >
          <h3 className="font-semibold text-lg ">REACT</h3>
          <div className="min-h-28 min-w-28 overflow-hidden flex justify-center">
            <Image src={reactImg} alt="react logo" height={100} width={100} className=" object-contain" />
          </div>

        </Button>
        <Button
          borderRadius="1rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 flex flex-col items-center "
        >
          <h3 className="font-semibold text-lg ">NODE JS</h3>
          <div className="min-h-28 min-w-28 overflow-hidden flex justify-center">
            <Image src={nodeImg} alt="node logo" height={100} width={100} className="object-contain" />
          </div>

        </Button>
        <Button
          borderRadius="1rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 flex flex-col items-center "
        >
          <h3 className="font-semibold text-lg ">EXPRESS JS</h3>
          <div className="min-h-28 min-w-28 overflow-hidden flex justify-center">
            <Image src={expressImg} alt="express logo" height={100} width={100} className="object-contain" />
          </div>

        </Button>
        <Button
          borderRadius="1rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 flex flex-col items-center "
        >
          <h3 className="font-semibold text-lg ">MONGODB</h3>
          <div className="min-h-28 min-w-28 overflow-hidden flex justify-center">
            <Image src={mongoImg} alt="mongodb logo" height={100} width={100} className="object-contain" />
          </div>

        </Button>
      </div>
    </div>

  )
}

export default Skill
