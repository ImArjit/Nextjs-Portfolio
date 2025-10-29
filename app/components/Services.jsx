import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <div
      id="services"
      className="w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="text-center">
        <h4 className="text-lg font-ovo text-gray-600 tracking-wide">
          What I Offer
        </h4>
        <h2 className="text-5xl font-ovo font-semibold mt-2 bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent">
          My Services
        </h2>
        <p className="max-w-2xl mx-auto mt-6 text-gray-600 font-ovo leading-relaxed">
          I am a Frontend Developer with 1.8+ years of experience crafting
          seamless and modern web experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="group relative border border-gray-200 rounded-2xl p-10 bg-white shadow-sm hover:shadow-2xl hover:border-gray-300 transition-all duration-500 ease-out hover:-translate-y-2"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 shadow-md transition-transform duration-500 group-hover:scale-110">
                <Image src={icon} alt={title} className="w-8" />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3 font-ovo">
                {title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed font-ovo">
                {description}
              </p>

              <Link
                href={link}
                className="inline-flex items-center gap-2 mt-6 text-sm text-gray-700 font-ovo group-hover:gap-3 transition-all duration-300"
              >
                Read More
                <Image
                  src={assets.right_arrow}
                  alt="Right_Arrow"
                  className="w-4 transition-transform duration-300"
                />
              </Link>
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-gray-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
