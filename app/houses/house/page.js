import localFont from "next/font/local";
import Image from "next/image";

import { AiOutlineWifi } from "react-icons/ai";
import { FaSwimmingPool } from "react-icons/fa";
import { MdKitchen } from "react-icons/md";
import { MdKingBed } from "react-icons/md";
import { MdScreenshotMonitor } from "react-icons/md";

const kugile = localFont({ src: "../../../public/kugile/Kugile_Demo.ttf" });

const House = () => {
  return (
    <div className="h-[100vh] w-full px-28 py-10">
      <h1 className={`${kugile.className} text-3xl font-medium`}>House 1A</h1>
      <div className="grid gap-2 grid-cols-[2fr_1fr] mt-6 rounded-3xl  overflow-hidden">
        <div className="relative w-full  ">
          <Image src="/img2.webp" alt="image" fill />
        </div>
        <div className="grid gap-2">
          <div className="relative h-[24vh]">
            <Image src="/img4.webp" alt="image" fill />
          </div>
          <div className="relative h-[24vh] ">
            <Image src="/img4.webp" alt="image" fill />
          </div>
        </div>
      </div>

      <div className="mt-8 w-full grid gap-2 grid-cols-[2fr_1fr] ">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h4 className={`${kugile.className} font-bold`}>Description</h4>
            <p className="">
              This house features a Fully equipped kitchen for your self
              catering needs with quality glassware, cutlery, crockery and
              table ware.The bed room has a queen size bed and a balcony for the
              views.There is WIFI internet for both entertainment and business
              needs
            </p>
          </div>

          <div>
            <h4 className={`${kugile.className} font-bold mb-4`}>Features</h4>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <AiOutlineWifi />
                <p>WIFI</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaSwimmingPool />
                <p>Swimming Pool</p>
              </div>
              <div className="flex items-center space-x-3">
                <MdKingBed />
                <p>Queen Size Bed</p>
              </div>
              <div className="flex items-center space-x-3">
                <MdKitchen />
                <p>Full Kitchen</p>
              </div>
              <div className="flex items-center space-x-3">
                <MdScreenshotMonitor />
                <p>Flat Screen Tv</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>Hello guest</h1>
        </div>
      </div>
    </div>
  );
};

export default House;
