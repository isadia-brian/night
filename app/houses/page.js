import localFont from "next/font/local";

import Image from "next/image";
import Link from "next/link";

const kugile = localFont({ src: "../../public/kugile/Kugile_Demo.ttf" });

const Houses = () => {
  return (
    <div className="h-[70vh] md:h-screen px-20 py-10 flex w-full ">
      <div className="border border-black w-full flex space-x-4 h-fit">
        <div className="relative h-80 w-80 bg-black">
          <Image src="/img14.webp" alt="room" fill />
        </div>
        <div>
          <div className="flex flex-col justify-between h-full py-4 ">
            <div className="flex flex-col">
              <h5
                className={`${kugile.className} font-extrabold border-green-800  border-b-2 max-w-fit`}
              >
                House 1A
              </h5>
              <p className=" max-w-[620px]">
                The room features a combination of double and/or single beds to
                comfortably accommodate your family.
              </p>
            </div>
            <div>
              <h3>Features</h3>
            </div>

            <div className="flex items-center justify-between ">
              <Link href="/houses/house">Room Details</Link>
              <button className="px-2 py-2 border border-green-800 bg-green-800 text-white max-w-[130px] text-sm">
                BOOK ROOM
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Houses;
