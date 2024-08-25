'use client'

import Image from "next/image"
import Button from "../components/Button"
import { useRouter } from "next/navigation";
import Slider from "../components/Slider";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const ResultsPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/')
  }

  return (
    < >
    <Navbar titleNavbar={'Resumen'} linkRedirect={'/'}/>
    <section className="flex min-h-screen flex-col pt-14 px-4 gap-10 lg:px-0  lg:m-auto lg:pt-2 lg:flex-row lg:justify-center ">
      <div className="lg:w-3/5">
        <div className="flex items-center gap-2 pt-6 pb-4">
          <Image
            src="/images/icons/CheckGreen24px.png"
            alt="back-arrow"
            width={16}
            height={16}
            className="h-6 w-6"
          />
          <h2 className="font-bold">¡Saldo Añadido!</h2>
        </div>
        <p className="text-sm">
          Tu saldo ya está añadido y puedes usarlo para realizar tus compras. ¿Listo para ganar?
        </p>

        <div className="flex justify-around items-center rounded shadow-md p-3 lg:justify-center lg:gap-8 bg-white">
          <div className="flex flex-col items-center">
            <p className="">10,00 €</p>
            <span className="text-sm">Antes</span>
          </div>
          <div>
            <Image
              src="/images/icons/ArrowRight24px.png"
              alt="back-arrow"
              width={24}
              height={24}
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-green-600 font-bold text-2xl">20,00 €</p>
            <span className="text-sm">Ahora</span>
          </div>
        </div>

        <div className="lg:flex lg:justify-end">
          <Button
            type="button"
            onClick={handleClick}
            className="bg-primary-500 text-white my-4 px-8 lg:w-fit"
          >
            Ir Al Inicio
          </Button>
        </div>

        <div className="flex justify-center mt-10">
          <Slider/>
        </div>
      </div>

      <div className="hidden h-auto lg:flex lg:w-1/4">
        <Sidebar/>
      </div>

    </section>
    </>
    
  )
}

export default ResultsPage