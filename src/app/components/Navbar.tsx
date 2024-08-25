import Image from "next/image"
import Link from "next/link"

interface Prop {
  titleNavbar: string,
  linkRedirect: string
}

const Navbar = ({titleNavbar, linkRedirect}: Prop) => {

  const dataNavbar = [
    { id: 1, icon: "/images/icons/Euromillones.png", info: "Euromillones", price: '17.000000 €' },
    { id: 2, icon: "/images/icons/Euromillones.png", info: "Euromillones", price: '17.000000 €' },
    { id: 3, icon: "/images/icons/Euromillones.png", info: "Euromillones", price: '17.000000 €' },
    { id: 4, icon: "/images/icons/Euromillones.png", info: "Euromillones", price: '17.000000 €' },
    { id: 5, icon: "/images/icons/Euromillones.png", info: "Euromillones", price: '17.000000 €' },
    { id: 6, icon: "/images/icons/Euromillones.png", info: "Euromillones", price: '17.000000 €' },
    { id: 7, icon: "/images/icons/Euromillones.png", info: "Euromillones", price: '17.000000 €' },
    { id: 8, icon: "/images/icons/Euromillones.png", info: "Euromillones", price: '17.000000 €' },
    { id: 9, icon: "/images/icons/Euromillones.png", info: "Euromillones", price: '17.000000 €' },
    { id: 10, icon: "/images/icons/Euromillones.png", info: "Euromillones", price: '17.000000 €' },
  ];

  return (
    <>
      <nav className="z-50 fixed top-0 left-0 bg-primary-500 flex justify-between items-center h-14 w-full text-white lg:h-16">
        
        <Link
          className="cursor-pointer flex place-items-center gap-2 p-4 text-sm font-bold lg:hidden"
          href={linkRedirect}
        >
          <Image
            src="/images/icons/Back24px.png"
            alt="back-arrow"
            width={24}
            height={24}
          />
          {titleNavbar}
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

      </nav>

      <section className="hidden mt-16 p-4 w-full lg:flex justify-around bg-white">
        {
          dataNavbar.map(data => (
            <div key={data.id} className="text-xs flex flex-col justify-center items-center">
              <Image 
                src={data.icon}
                alt={data.info}
                width={24}
                height={24}
                className="h-auto w-auto"
              />
              <p>{data.info}</p>
              <p className="font-semibold">{data.price}</p>
            </div>
          ))
        }
      </section>
    </>
  )
}

export default Navbar
