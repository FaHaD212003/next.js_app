import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-[70vh] md:min-h-[60vh] lg:min-h-[75vh] w-full grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-8 lg:gap-12 bg-background text-foreground px-4 sm:px-8 md:px-12 py-8">
      <div className="space-y-5 text-center md:text-left flex flex-col items-center md:items-start">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground">
          Timeless Elegance on Your Wrist
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-lg leading-relaxed">
          Discover our curated collection of premium watches, crafted for those
          who appreciate sophistication and precision.
        </p>

        <div className="pt-2">
          <Link href="#product">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium text-sm sm:text-base transition-colors cursor-pointer shadow-sm">
              Shop the Collection
            </button>
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <Image
          src="/hero-img.png"
          alt="Watch"
          width={700}
          height={700}
          className="w-full max-w-[280px] sm:max-w-[380px] md:max-w-[460px] lg:max-w-[560px] xl:max-w-[590px] h-auto object-contain drop-shadow-xl"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
