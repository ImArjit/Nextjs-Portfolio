import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="text-center">
        <Image src={assets.logo} alt="Logo" className="w-36 mx-auto mb-2" />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="Mail_Icon" className="w-6" />
          arjitanand88@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Arjit Anand. All rights reserved.</p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <Link target="_blank" href="https://github.com/ImArjit">
              Github
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://linkedin.com/in/imarjit">
              Linkedin
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
