import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 bg-primary-500 flex justify-between items-center h-14 w-full text-white lg:h-16">
      
      <Link
        className="cursor-pointer flex place-items-center gap-2 p-4 text-sm font-bold lg:hidden"
        href="/"
      >
        <Image
          src="/images/icons/Back24px.png"
          alt="back-arrow"
          width={24}
          height={24}
        />
        Gestión de Saldo
      </Link>

      <div className="hidden gap-6 p-4 text-base lg:flex items-center">
        <Image
          src="/images/icons/Line44.png"
          alt="back-arrow"
          width={2.5}
          height={2.5}
        />
        <Link href="/">Inicio</Link>
        <Link href="/resultados">Resultados y Botes</Link>
        <Link href="/quienes-somos">Quiénes Somos</Link>
        <Link href="/ayuda">Ayuda</Link>
      </div>
      

      <div className="flex text-xs gap-5 px-4 lg:text-base lg:gap-8 lg:px-8">
        <div className="flex flex-col pt-2 items-center ">
          <Link
            className="cursor-pointer"
            href="/"
          >
            <Image
              src="/images/icons/User24px.png"
              alt="back-arrow"
              width={24}
              height={24}
            />
          </Link>
          <p>
            10.00 €
          </p>
        </div>

        <Link
          className="cursor-pointer flex place-items-center"
          href="/"
        >
          <Image
            src="/images/icons/Cart24px.png"
            alt="back-arrow"
            width={24}
            height={24}
          />
        </Link>

        <Link
          className="cursor-pointer flex place-items-center lg:hidden"
          href="/"
        >
          <Image
            src="/images/icons/Close24px.png"
            alt="back-arrow"
            width={24}
            height={24}
          />
        </Link>
      </div>


    </div>
  )
}

export default Navbar
