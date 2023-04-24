import Image from "next/image";
import Hero from "@/components/Hero";
import localFont from "next/font/local";

import Footer from "@/components/Footer";
import Rooms from "@/components/Rooms";
import Slider from "@/components/Slider";
import Showcase from "@/components/Showcase";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

const poppins = localFont({ src: "../public/poppins/Poppins-Regular.ttf" });

const bellaberry = localFont({ src: "../public/bellaberry/Bellaberry.otf" });

const kugile = localFont({ src: "../public/kugile/Kugile_Demo.ttf" });

export default function Home() {
  return (
    <main className={`${poppins.className} w-full`}>
      <Hero />
      <section className="flex  w-full h-[150px] flex-col md:flex-row border-b-[0.8px] ">
        <div className="px-6 w-full md:w-1/2 md:mx-0 flex justify-between items-center">
          <h1 className={`text-xl  font-semibold ${kugile.className}`}>
            Relax and unwind effortlessly at <br />
            <span className="text-center">Silent Palms Villas</span>
          </h1>
        </div>

        <div className=" border-l-[0.8px] px-6 md:w-1/2 mt-2 md:mt-0 relative md:text-left md:pl-20">
          <p className="text-sm">
            We ensure that your stay is as entertaining as possible from the
            moment you set foot in our facility
          </p>
        </div>
      </section>

      <Rooms />
      <Slider />
      <Showcase />
    </main>
  );
}
