import Image from "next/image";

import localFont from "next/font/local";


const kugile = localFont({ src: "../public/kugile/Kugile_Demo.ttf" });


const Rooms = () => {
  return (
    <section className="w-full border-b-[0.8px] md:pl-28 px-6 md:pr-20 py-10 ">
      <div className="mb-8">
        <h3 className={`${kugile.className} text-xl font-semibold`}>
          Our Houses
        </h3>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="flex flex-col space-y-5">
          <h5
            className={`${kugile.className} font-extrabold border-green-800  border-b-2 max-w-fit`}
          >
            Suite
          </h5>
          <p className="text-xs max-w-[320px]">
            Spacious and luxurious option with separate living and sleeping
            areas, high-end amenities, and ample space to relax and unwind.
          </p>
          <div className="relative h-80 w-80 bg-black">
            <Image src="/img16.webp" alt="room" fill />
          </div>
          <button className="px-2 py-2 border border-green-800 max-w-[130px] text-sm">
            View House
          </button>
        </div>
        <div className="flex flex-col space-y-5">
          <h5
            className={`${kugile.className} font-extrabold border-green-800  border-b-2 max-w-fit`}
          >
            Family
          </h5>
          <p className="text-xs max-w-[320px]">
            The room features a combination of double and/or single beds to
            comfortably accommodate your family.
          </p>
          <div className="relative h-80 w-80 bg-black">
            <Image src="/img14.webp" alt="room" fill />
          </div>
          <button className="px-2 py-2 border border-green-800 max-w-[130px] text-sm">
            View House
          </button>
        </div>
        <div className="flex flex-col space-y-5">
          <h5
            className={`${kugile.className} font-extrabold border-green-800  border-b-2 max-w-fit`}
          >
            Twin Bed
          </h5>
          <p className="text-xs max-w-[320px]">
            Comfortable twin beds, modern amenities, and a private bathroom with
            toiletries make our room perfect for a cozy stay.
          </p>
          <div className="relative h-80 w-80 bg-black">
            <Image src="/img10.webp" alt="room" fill />
          </div>
          <button className="px-2 py-2 border border-green-800 max-w-[130px] text-sm">
            View House
          </button>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
