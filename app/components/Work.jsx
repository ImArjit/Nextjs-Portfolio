import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Work = () => {
  return (
    <section
      id="work"
      className="relative w-full px-[8%] py-28 scroll-mt-20 bg-white overflow-hidden"
    >
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-200/30 rounded-full blur-3xl opacity-40"></div>

      <div className="relative text-center">
        <h2 className="mt-3 text-5xl md:text-6xl font-semibold font-ovo bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent">
          Selected Works
        </h2>
        <p className="max-w-2xl mx-auto mt-6 text-gray-600 font-ovo leading-relaxed">
          A selection of projects that combine thoughtful design, modern
          engineering, and smooth interactions — crafted to leave a lasting``
          impression.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-20 gap-10">
        {workData.map((project, index) => (
          <Link
            href={project.link}
            target="_blank"
            key={index}
            className="group relative aspect-[1/1] rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-out"
          >
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={project.bgImage}
                alt={project.title}
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700"></div>

            <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/40 to-transparent backdrop-blur-[1px]">
              <h3 className="text-2xl font-semibold text-white group-hover:text-indigo-300 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-gray-300 line-clamp-2">
                {project.description}
              </p>

              <div className="mt-5 flex items-center gap-3">
                <div className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white border border-white/40 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                  View Project
                </div>
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/40 bg-white/10 hover:bg-white/20 transition-all duration-300">
                  <Image
                    src={assets.send_icon}
                    alt="Send Icon"
                    className="w-5 invert opacity-80 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Work;
