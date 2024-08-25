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

    <div className="relative w-full flex justify-center items-end">

      {/* SLIDER */}
      <div className="relative w-full h-full max-h-80 rounded-lg bg-black overflow-hidden lg:w-11/12">
        <div
          className="w-full h-full flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 flex items-center justify-center"
            >
              <Image
                src={slide}
                width={600}
                height={300}
                alt={`Slide ${index}`}
                className="w-full h-full object-fill"
              />
            </div>
          ))}
        </div>
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

      <button onClick={prevSlide} type="button" className="hidden absolute top-0 -left-4 z-40 lg:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none 2xl:left-4">
        <span className="inline-flex items-center justify-center p-3 rounded border shadow border-[#CCCCCC] bg-white">
          <Image
            src={'/images/icons/Chevron-left.png'}
            width={24}
            height={24}
            alt='chevron-right'
            className="w-6 h6"
          />
        </span>
      </button>
      <button onClick={nextSlide} type="button" className="hidden absolute top-0 -right-4 z-40 lg:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none 2xl:right-4">
        <span className="inline-flex items-center justify-center p-3 rounded border shadow border-[#CCCCCC] bg-white">
          <Image
            src={'/images/icons/Chevron-right.png'}
            width={24}
            height={24}
            alt='chevron-right'
            className="w-6 h6"
          />
        </span>
      </button>

      {/* INFORMACION */}
      <div className="absolute top-0 w-full max-w-[500px] text-white flex flex-col gap-2 p-2 z-40 
     sm:p-8 sm:gap-3 sm:px-4 md:py-0 md:w-4/5 md:h-3/4 sm:top-8 lg:rounded-md lg:bg-[url('/images/slider/Banner.svg')] lg:bg-cover ">
        <div className="z-30 w-full flex items-center justify-between gap-4 mt-4">
          <div className=" flex gap-2 items-center">
            <div className="rounded-full h-8 w-8 bg-white flex justify-center items-center">
              <Image
                src="/images/icons/IconGreen24px.png"
                alt="primitiva"
                width={16}
                height={16}
                className="h-6 w-6"
              />
            </div>
            <h2 className="font-bold text-2xl">La Primitiva</h2>
          </div>
          <Button className="max-w-fit bg-yellow-500 text-black !py-1 flex items-center gap-1 text-xs md:py-4">
            <Image
              src="/images/icons/Calendar.svg"
              alt="calendar"
              width={16}
              height={16}
              className="h-4 w-4 lg:w-6 lg:h-6"
            />
            <span className="lg:hidden">D/M/Y</span>
            <span className="hidden lg:flex">Miércoles · 11/11/2023</span>
          </Button>
        </div>
        <h2 className="z-30 flex justify-center font-bold text-3xl lg:text-[42px]">24.000.000 €</h2>
        <div className="z-30 flex mb-4 md:flex-col md:gap-4">
          <div className="w-full flex gap-4 items-center justify-between">
            <div className="w-full flex gap-4 items-center">
              <Image
                src="/images/icons/Clock24px.png"
                alt="clock"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <p className="flex gap-2">
                <span>10d</span><span>10h</span><span>10m</span><span>10s</span>
              </p>
            </div>
            <Button className="bg-primary-500 max-w-fit !py-1 px-6 md:hidden">Jugar</Button>
          </div>

          <div className="hidden md:flex justify-between">
            <Button className="border border-white max-w-fit py-[10px] px-6">Primiabono</Button>
            <Button className="border border-white max-w-fit py-[10px] px-6">Peña Primitiva</Button>
            <Button className="border border-white max-w-fit py-[10px] px-6">Individual</Button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Slider