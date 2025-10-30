"use client";

import Image from "next/image";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { infoList, toolsData } from "@/assets/assets";

const toolNames = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Axios",
  "Bootstrap",
  "Chakra UI",
  "GSAP",
  "Postman",
  "React Router",
  "Redux",
  "ShadCN UI",
  "Tailwind CSS",
  "Tanstack Query",
  "Thunder Client",
  "Zustand",
  "VS Code",
  "Firebase",
  "Figma",
  "Git",
];

export default function About() {
  return (
    <div id="about" className="w-full px-[12%] py-16 scroll-mt-20">
      <h2 className="text-center text-5xl font-ovo mb-10">About me</h2>
      <div className="flex flex-col items-center gap-12 text-center">
        <p className="max-w-3xl font-ovo leading-relaxed text-gray-700 text-[17px]">
          Results-driven Frontend Developer with 1.8+ years of hands-on
          experience in designing, developing, and optimizing scalable,
          responsive web applications using React, JavaScript (ES6+), and modern
          UI frameworks. Proven track record of delivering user-friendly
          interfaces, integrating RESTful APIs, and collaborating with
          cross-functional teams to deploy high-quality software. Passionate
          about performance optimization, clean code, and delivering seamless
          user experiences in production environments.
        </p>
        {/* Info Cards */}{" "}
        {/* <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
          {" "}
          {infoList.map(({ icon, title, description }, i) => (
            <li
              key={i}
              className="border border-gray-300 rounded-2xl p-6 cursor-pointer bg-white/70 backdrop-blur-sm hover:bg-white hover:-translate-y-1 duration-300 shadow-sm hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)]"
            >
              {" "}
              <div className="flex justify-center mb-3">
                {" "}
                <Image src={icon} alt={title} className="w-8 h-8" />{" "}
              </div>{" "}
              <h3 className="font-semibold text-gray-700 text-base">
                {" "}
                {title}{" "}
              </h3>{" "}
              <p className="text-gray-600 text-sm mt-2">{description}</p>{" "}
            </li>
          ))}{" "}
        </ul>{" "} */}
        {/* Tools */}
        <h4 className="text-center text-5xl font-ovo"> Tools I use </h4>
        <TooltipProvider delayDuration={100}>
          <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-8 gap-y-8 max-w-4xl justify-items-center">
            {toolsData.map((tool, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div>
                    <li className="flex items-center justify-center w-20 sm:w-24 aspect-square border border-gray-300 rounded-2xl cursor-pointer bg-white/70 hover:bg-white shadow-md hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-300">
                      <Image
                        src={tool}
                        alt={toolNames[index]}
                        className="w-12 sm:w-14 opacity-90 hover:opacity-100 transition-opacity duration-300"
                      />
                    </li>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="text-xs font-medium bg-gray-800 text-white border-none rounded-md shadow-lg">
                  {toolNames[index]}
                </TooltipContent>
              </Tooltip>
            ))}
          </ul>
        </TooltipProvider>
      </div>
    </div>
  );
}
