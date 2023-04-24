import React from "react";
import Container from "./Container";
import Image from "next/image";
import localFont from "next/font/local";
import Button from "./Button";
import Navbar from "./Navbar";
import Link from "next/link";

const bellaberry = localFont({ src: "../public/bellaberry/Bellaberry.otf" });
const kugile = localFont({ src: "../public/kugile/Kugile_Demo.ttf" });

const Hero = () => {
  return (
    <div className="flex md:flex-row-reverse justify-between flex-col w-full md:border-b-[0.2px]">
      <div className=" h-[370px] md:h-[80vh] md:w-[50%] relative m-6 md:m-0 rounded-2xl md:rounded-none">
        <Image
          src="/img22.webp"
          alt="hero"
          fill
          className="rounded-2xl md:rounded-none"
        />
      </div>
      <div className=" h-[40vh] md:h-[80vh] ml-6 md:ml-0">
        <div className="md:pl-20 h-full flex flex-col justify-center ">
          <p
            className={`${kugile.className} text-7xl md:text-7xl text-green-800`}
          >
            Silent
          </p>
          <p
            className={`${kugile.className}  text-6xl  md:text-7xl text-black `}
          >
            Palms Villa
          </p>
          <h1
            className={` md:max-w-[400px] text-gray-500 font-semibold mt-3 md:mt-6 md:mb-4`}
          >
            Silent Palms Villa is located at South Coast Diani Beach in lush
            green forests providing serenity experience to the guests.
          </h1>
          <div className="my-3 flex items-center space-x-4">
            <button className="bg-green-800 px-6 max-w-[220px] text-white font-semibold rounded-sm py-[14px] uppercase">
              Explore Houses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
