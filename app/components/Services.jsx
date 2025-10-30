import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <section
      id="services"
      className="w-full px-[8%] py-24 scroll-mt-20 bg-white relative overflow-hidden"
    >
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-pink-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative text-center">
        <h2 className="text-5xl font-semibold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent font-ovo">
          My Services
        </h2>
        <p className="max-w-2xl mx-auto mt-6 text-gray-600 font-ovo leading-relaxed">
          I craft beautiful, performant, and user-centric web experiences that
          merge aesthetics with functionality.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="group relative p-[2px] rounded-3xl bg-gradient-to-br from-gray-200/60 via-white to-gray-100 hover:from-indigo-200/60 hover:to-pink-100 transition-all duration-500"
          >
            <div className="relative rounded-3xl bg-white/70 backdrop-blur-md p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-pink-50 shadow-inner group-hover:scale-110 transform transition-transform duration-500">
                <Image src={icon} alt={title} className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3 font-ovo group-hover:text-indigo-600 transition-colors duration-300">
                {title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed font-ovo flex-grow">
                {description}
              </p>

              {/* <Link
                href={link}
                className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-indigo-600 hover:text-indigo-700 group-hover:gap-3 transition-all duration-300"
              >
                Read More
                <Image
                  src={assets.right_arrow}
                  alt="Right_Arrow"
                  className="w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
