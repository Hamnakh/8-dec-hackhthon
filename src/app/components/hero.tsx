
import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative">
      <img src="/hero.png" alt="Formal" className="w-full h-auto object-cover" />

      <div className="absolute top-0 bottom-0 left-0 right-0  z-10">
        <div className="container mx-auto px-4 py-24 text-start text-black font-bold z-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLE
          </h1>
          <p className=" text-lg md:text-xl mb-8">
            Browse through our diverse range of meticulously crafted garments, <br />
            designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="bg-black text-white py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}