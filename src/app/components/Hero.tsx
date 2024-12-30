import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="px-4 font-serif" >
      <div className="flex flex-col  text-black justify-center  text-center   ">
        <h1 className="text-xl sm:text-3xl md:text-4xl underline pb-4 pt-8 md:pt-16 font-bold  ">
        Skincare & Self-Care
        </h1>
        <p className="text-sm sm:text-lg md:text-xl   pb-6 sm:pb-8 px-4 sm:px-16">
        Embrace more you time, savvy up on the latest skincare trends and uncover the best in beauty to help you enhance every version of you.
        </p>
        <div>
            <Image src={'/skincare-hero.webp'} width={700} height={600} alt="hero-img" className="w-full h-56 mb-4 md:mb-10 md:h-96">

            </Image>
        </div>
      </div>
      </div>
  );
};

export default Hero;
