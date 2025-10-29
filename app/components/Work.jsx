import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Work = () => {
  return (
    <div
      id="work"
      className="w-full px-[12%] text-center py-20 scroll-mt-20 bg-gradient-to-b from-white to-gray-50"
    >
      <h4 className="text-lg font-ovo text-gray-600 tracking-wide">
        My Portfolio
      </h4>
      <h2 className="text-5xl font-ovo font-semibold mt-2 bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent">
        My Latest Work
      </h2>
      <p className="max-w-2xl mx-auto mt-6 text-gray-600 font-ovo leading-relaxed">
        Welcome to my Web Development portfolio! Explore a collection of
        projects showcasing my experties in front-end development.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-16 gap-8">
        {workData.map((project, index) => (
          <div
            key={index}
            className="relative aspect-square bg-no-repeat bg-cover bg-center rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 ease-out"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-11/12 bg-white/90 backdrop-blur-md rounded-xl py-4 px-6 flex items-center justify-between shadow-[3px_3px_0_#000] group-hover:shadow-[5px_5px_0_#000] transition-all duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>

              <div className="relative">
                <div className="border border-black rounded-full w-10 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] bg-white group-hover:bg-lime-300 transition-all duration-500 overflow-hidden">
                  <Image
                    src={assets.send_icon}
                    alt="Send_Icon"
                    className="w-5 transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-1"
                  />
                </div>

                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-700 ease-out">
                  <span className="absolute top-1/2 left-[-8px] w-3 h-[2px] bg-lime-400 rounded-full blur-sm"></span>
                  <span className="absolute top-1/2 left-[-12px] w-2 h-[1.5px] bg-lime-300 rounded-full blur-sm"></span>
                </span>
              </div>
            </div>

            <div className="absolute inset-0 scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
          </div>
        ))}
      </div>

      <Link
        href={"#"}
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-300"
      >
        Show More{" "}
        <Image
          src={assets.right_arrow_bold}
          alt="Right_Arrow_Bold"
          className="w-4"
        />
      </Link>
    </div>
  );
};

export default Work;
