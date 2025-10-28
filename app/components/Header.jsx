import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.profile_img}
          alt="Profile_Image"
          className="rounded-full w-32"
        />
      </div>

      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
        Hi! I'm Arjit Anand{" "}
        <Image src={assets.hand_icon} alt="Hand_Icon" className="w-6" />
      </h3>

      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
        Frontend Web Developer
      </h1>
      <p className="max-w-2xl mx-auto font-ovo">
        Results-driven Frontend Developer with 1.8+ years of hands-on experience
        in designing, developing, and optimizing scalable, responsive web
        applications using React, JavaScript (ES6+), and modern UI frameworks.
        Proven track record of delivering user-friendly interfaces, integrating
        RESTful APIs, and collaborating with cross-functional teams to deploy
        high-quality software. Passionate about performance optimization, clean
        code, and delivering seamless user experiences in production
        environments.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <Link
          href={"#contact"}
          className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2"
        >
          Contact me{" "}
          <Image
            src={assets.right_arrow_white}
            alt="Right_Arrow"
            className="w-4"
          />
        </Link>
        <Link
          href={"/sample-resume.pdf"}
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My Resume{" "}
          <Image
            src={assets.download_icon}
            alt="Download_Icon"
            className="w-4"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
