"use client";

import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";
import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

import DateRange from "./Calendar";

const kugile = localFont({ src: "../public/kugile/Kugile_Demo.ttf" });
const poppins = localFont({ src: "../public/poppins/Poppins-Regular.ttf" });
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [y, setY] = useState(0);

  const handleNavigation = (e) => {
    const window = e.currentTarget;

    setY(window.scrollY);
  };

  let Links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Houses",
      link: "/house",
    },
    {
      title: "Movie",
      link: "/movies",
    },
    {
      title: "Contact us",
      link: "/",
    },
    {
      title: "Login",
      link: "/login",
    },
    {
      title: "Register",
      link: "/register",
    },
    {
      title: "Forgot Password",
      link: "/forgot",
    },
  ];

  useEffect(() => {
    setY(window.scrollY);

    window.addEventListener("scroll", (e) => handleNavigation(e));
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 text-white z-50">
      <div
        className={`${
          y > 0
            ? "bg-green-800 transition duration-500 ease-in "
            : "bg-white transition duration-300 ease-in"
        } md:flex items-center justify-between  py-6 px-4 md:px-20`}
      >
        <div className="flex items-center">
          <div className="relative h-[60px] w-[60px] md:h-[70px] md:w-[70px] rounded-full ">
            <Image src="/logo.jpeg" alt="logo" fill className="rounded-full" />
          </div>
        </div>
        <DateRange />
        <div className="h-8 w-8 rounded-md hidden md:flex">
          <FaUserCircle className="text-2xl text-black" />
        </div>
        <div
          className={`absolute right-4 top-10 text-3xl md:hidden ${
            y > 0 ? "text-white" : "text-black"
          }`}
          onClick={() => setOpen(!open)}
        >
          {!open ? <HiOutlineMenuAlt3 /> : <AiOutlineClose />}
        </div>

        <ul
          className={`md:hidden md:items-center pb-12 md:pb-0 absolute md:${
            poppins.className
          } md:static  z-[-1] w-full left-0 top-0 md:z-auto md:w-auto bg-green-800 md:pl-0 pl-9 transition-all duration-700 ease-in ${
            open
              ? "top-[117px]  opacity-100 border-t-2 border-black"
              : "top-[-490px]"
          } md:opacity-100 opacity-0`}
        >
          {Links.map(({ title, link }, index) => {
            return (
              <li
                key={index}
                className={`min-w-fit md:ml-8  uppercase text-4xl md:text-sm my-10 md:my-0 hover:text-amber-400 duration-500  md:${poppins.className} font-extrabold`}
              >
                <Link href={link} onClick={() => setOpen(!open)}>
                  {title}
                </Link>
              </li>
            );
          })}
          <Button>BOOK NOW</Button>
        </ul>
      </div>
      <div className="w-full  ">
        <nav className="hidden md:flex  bg-green-800 items-center py-5  ">
          <ul className="flex items-center justify-between font-bold w-full max-w-[400px] mx-auto ">
            {Links.splice(0, 4).map(({ title, link }, index) => {
              return (
                <li
                  key={index}
                  className={`min-w-fit md:ml-8  uppercase text-4xl md:text-sm my-10 md:my-0 hover:text-amber-400 duration-500  md:${poppins.className} font-extrabold`}
                >
                  <Link href={link}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
