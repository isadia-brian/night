import Image from "next/image";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Button from "@/components/Button";

import localFont from "next/font/local";
const kugile = localFont({ src: "../public/kugile/Kugile_Demo.ttf" });
const bellaberry = localFont({ src: "../public/bellaberry/Bellaberry.otf" });
const Showcase = () => {
  return (
    <section className="flex flex-col md:flex-row w-full px-6 justify-between  border-b-[0.8px] h-fit ">
      <div>
        <div className="md:pl-28 w-full ">
          <div className="relative h-80 w-80 md:h-[480px] md:w-[480px]">
            <Image src="/img3.webp" alt="room" fill />
          </div>
          <h3 className={`mt-6 text-4xl ${kugile.className}`}>
            Award{" "}
            <span
              className={`${bellaberry.className} text-[100px] text-green-800`}
            >
              winning{" "}
            </span>{" "}
            <br />
            style and
            <br /> comfort
          </h3>
        </div>
      </div>
      <div className=" md:border-l-[0.8px] w-full md:w-1/2 relative py-10  md:pr-20  md:pl-10 ">
        <div className="w-full">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h5 className={`${kugile.className}`}>
                ROOM
                <br />& SUITE
              </h5>
            </div>
            <div className="flex items-center space-x-2">
              <div className="border px-3 py-3">
                <HiOutlineArrowNarrowLeft />
              </div>
              <div className="border px-3 py-3 bg-green-800">
                <HiOutlineArrowNarrowRight className="text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex md:flex-row items-center space-x-3 overflow-x-scroll w-full  md:px-0 ">
            <div className="h-[415px] min-w-[270px] bg-black relative">
              <Image src="/img5.webp" alt="room" fill />
            </div>
            <div className="h-[415px] min-w-[270px] bg-black relative">
              <Image src="/img8.webp" alt="room" fill />
            </div>
            <div className="h-[415px] min-w-[270px] bg-black relative">
              <Image src="/img7.webp" alt="room" fill />
            </div>
          </div>
          <div className="mt-6 text-sm">
            <p>
              Welcome to our exquisite hotel room, where luxury and comfort
              merge to create a one-of-a-kind experience. As you step into this
              lavish space, you will be greeted by a warm and inviting ambiance
              that is sure to put you at ease.
            </p>
            <p className="mt-4">
              The room is designed with sophisticated decor and top-of-the-line
              amenities to cater to your every need.
            </p>
          </div>
          <div className="mt-8">
            <button className="bg-green-800 font-bold text-white text-sm py-3 px-6 flex justify-center items-center">
              DISCOVER ROOM
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
