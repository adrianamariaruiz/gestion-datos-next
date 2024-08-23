import Image from "next/image"
import Button from "./Button"
import { useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/images/slider/Bonoloto.png",
    "/images/slider/Euromillones.png"
  ];
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (

    <div className="relative w-full flex justify-center">

      {/* SLIDER */}
      <div className="relative h-64 max-w-[600px] overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'} flex items-center justify-center`}
            style={{ transition: 'opacity 0.7s' }}
          >
            <Image src={slide} width={300} height={300} alt={`Slide ${index}`} className="w-full max-w-[500px] h-64" />
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex items-center -translate-x-1/2 bottom-5 left-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`rounded-full ${index === currentSlide ? 'bg-gray-100 w-3 h-3' : 'bg-gray-400 w-[10px] h-[10px]'}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <button onClick={prevSlide} type="button" className="hidden absolute top-0 left-0 z-50 md:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg className="w-4 h-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
          </svg>
        </span>
      </button>
      <button onClick={nextSlide} type="button" className="hidden absolute top-0 right-0 z-50 md:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg className="w-4 h-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
          </svg>
        </span>
      </button>

      {/* INFORMACION */}
      <div className="absolute top-0 w-full max-w-[500px] text-white flex flex-col gap-2 px-4 pt-2 z-40">

        <div className="w-full flex items-center justify-between gap-4 mt-4">
          <div className=" flex gap-2 items-center">
            <div className="rounded-full h-8 w-8 bg-white flex justify-center items-center">
              <Image
                src="/images/icons/IconGreen24px.png"
                alt="back-arrow"
                width={16}
                height={16}
                className="h-6 w-6"
              />
            </div>
            <h2 className="font-bold">La Primitiva</h2>
          </div>
          <Button className="max-w-fit bg-yellow-500 text-black py-2 flex items-center gap-1 text-xs">
            <Image
              src="/images/icons/Calendar16px.png"
              alt="back-arrow"
              width={16}
              height={16}
              className="h-4 w-4"
            />
            D/M/Y
          </Button>
        </div>

        <h2 className="flex justify-center font-bold text-[42px]">24.000.000 €</h2>

        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-4">
            <Image
              src="/images/icons/Clock24px.png"
              alt="back-arrow"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <p className="flex gap-2">
              <span>10d</span><span>10h</span><span>10m</span><span>10s</span>
            </p>
          </div>
          <Button className="bg-primary-500 max-w-fit py-[10px] px-6">Jugar</Button>
        </div>
      </div>
    </div>
  )
}

export default Slider