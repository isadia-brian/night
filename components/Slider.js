import Image from "next/image";
import localFont from "next/font/local";
import Button from "@/components/Button";
const kugile = localFont({ src: "../public/kugile/Kugile_Demo.ttf" });

const Slider = () => {
  return (
    <section className="px-6 py-12 md:py-20">
      <div className="bg-green-200 h-80 md:h-[500px] w-full relative mb-4 rounded-2xl md:w-[80vw] mx-auto md:rounded-none">
        <Image
          src="/img1.webp"
          className="rounded-2xl md:rounded-none"
          alt="slider-img"
          fill
        />
      </div>
      <p
        className={`${kugile.className} text-center max-w-[500px] mx-auto my-6 font-bold`}
      >
        Experience unparalleled comfort and luxury in our spacious and elegant
        family room at Silent Palms Villas.{" "}
        <span className="hidden">
          Our meticulously designed space boasts plush furnishings and
          top-of-the-line amenities, providing the perfect home away from home
          for you and your loved ones.
        </span>
      </p>
      <div className="flex items-center justify-center mt-3">
        <button className="bg-green-800 px-6 py-3 w-[200px] font-bold text-white text-xs">
          KNOW MORE
        </button>
      </div>
    </section>
  );
};

export default Slider;
