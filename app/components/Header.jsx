import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div className="md:mt-20 mt-40">
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
        I’m a Frontend Developer with 1.8+ years of hands-on experience building
        scalable, high-performance web applications using React and Next.js. I
        specialize in creating responsive, user-centric interfaces and have
        industry-level experience working with the MERN stack, integrating APIs,
        and optimizing UI performance for real-world production environments.
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
