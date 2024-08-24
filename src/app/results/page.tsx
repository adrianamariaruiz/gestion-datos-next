'use client'

import Image from "next/image"
import Button from "../components/Button"
import { useRouter } from "next/navigation";
import Slider from "../components/Slider";

const ResultsPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/')
  }

  return (
    <section className="flex min-h-screen flex-col pt-14 px-4 gap-4">

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

      <div className="flex justify-around items-center rounded shadow-md p-3">
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

      <Button
        type="button"
        onClick={handleClick}
        className="bg-primary-500 text-white"
      >
        Ir Al Inicio
      </Button>

      <Slider/>

    </section>
  )
}

export default ResultsPage