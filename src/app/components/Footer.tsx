import Image from "next/image"
import Link from "next/link"

const Footer = () => {

  const stamps = [
    { id: 1, icon: "/images/sellos/Visa.svg", name: 'visa' },
    { id: 2, icon: "/images/sellos/Maestro.svg", name: 'maestro' },
    { id: 3, icon: "/images/sellos/Mastercard.svg", name: 'mastercard' },
    { id: 4, icon: "/images/sellos/Telepago.svg", name: 'telepago' },
    { id: 5, icon: "/images/sellos/ServiRed.svg", name: 'servired' },
    { id: 6, icon: "/images/sellos/Bizum.svg", name: 'bizum' },
    { id: 7, icon: "/images/sellos/LaCaixa.svg", name: 'lacaixa' },
    { id: 8, icon: "/images/sellos/BBVA.svg", name: 'bbva' },
    { id: 9, icon: "/images/sellos/Santander.svg", name: 'santander' },
    { id: 10, icon: "/images/sellos/Sabadell.svg", name: 'sabadell' },
  ]

  return (
    <footer className="fixed  lg:static bottom-0 w-full h-16 lg:h-auto bg-white shadow-top">
      {/* Mobile */}
      <div className="h-full flex items-center justify-around lg:hidden">

        <Link 
          href='/'
          className="flex flex-col items-center text-sm"
        >
          <Image
            src="/images/icons/Home16px.png"
            alt="back-arrow"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <p>Inicio</p>
        </Link>
       
       
        <Link href='/' className="flex flex-col items-center text-sm">
          <Image
            src="/images/icons/Results16px.png"
            alt="back-arrow"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <p>Resultados</p>
        </Link>
        <Link href='/' className="flex flex-col items-center text-sm">
          <Image
            src="/images/icons/Questiongrey16px.png"
            alt="back-arrow"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <p>Ayuda</p>
        </Link>
      </div>

      {/* Desktop */}
      <div className="hidden h-auto w-full p-8 lg:grid grid-cols-4 grid-rows-1 gap-8 justify-between bg-black text-white">
        {/* 1 */}
        <section className="flex flex-col p-6 justify-center">
          <Image
            src="/images/Logo.png"
            alt="back-arrow"
            width={200}
            height={100}
            className="h-20 w-44"
          />
        </section>

        {/* 2 */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl pb-4">Links de Interés</h2>
            <div className="underline flex justify-between">
              <Link href='/'>Quienes Somos</Link>
              <Link href='/'>Ayuda</Link>
            </div>
            <div className="underline flex justify-between">
              <Link href='/'>Preguntas Frecuentes</Link>
              <Link href='/'>Blog</Link>
            </div>
            <div className="underline flex justify-between">
              <Link href='/'>Premios Repartidos</Link>
              <Link href='/'>Mapa Web</Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl py-2">Otros Links</h2>
            <Link href='/' className="underline">Comprar Loteria De Navidad</Link>
            <Link href='/' className="underline">Comprar Lotería del Niño</Link>
            <Link href='/' className="underline">Lotería de Navidad Para Empresas</Link>
            <Link href='/' className="underline">Bote XX Millones Euromillones</Link>
            <Link href='/' className="underline">Lotería Sorteo Especial</Link>
            <Link href='/' className="underline">Lotería Jueves y Sábado</Link>
          </div>
        </section>

        {/* 3 */}
        <section className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">Confianza y Seguridad</h2>
          <p>Sellos de Confianza</p>
          <div className="flex flex-wrap gap-2">
            <Image
              src="/images/sellos/Confianza.svg"
              alt="confianza-online"
              width={24}
              height={24}
              className="h-6 w-auto"
            />
            <Image
              src="/images/sellos/Juego-responsable.svg"
              alt="juego-responsable"
              width={24}
              height={24}
              className="h-6 w-auto"
            />
          </div>
          
          <p className="flex gap-2">Métodos de Pago</p>
          <div className="flex flex-wrap gap-2">
            {
              stamps.map(item => (
                <Image
                  key={item.id}
                  src={item.icon}
                  alt={item.name}
                  width={24}
                  height={24}
                  className="h-6 w-auto"
                />
              ))
            }
          </div>
        </section>

        {/* 4 */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl pb-2">Textos Legales</h2>
            <Link href='/' className="underline">Condiciones Generales</Link>
            <Link href='/' className="underline">Política de Privacidad</Link>
            <Link href='/' className="underline">Política de Cookies</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-xl pb-2">Contacto</h2>
            <Link href='/' className="underline">hello@devtalenty.com</Link>
            <Link href='/' >+506  124 356 789</Link>
            <Link href='/' className="underline">Chat</Link>
            <p>De lunes a viernes de 9:00h a 19:00h</p>
            <div className="flex gap-2">
            <p>Síguenos en:</p>
            <Link href='/'>
              <Image
                src="/images/social/Facebook-white.png"
                alt="back-arrow"
                width={24}
                height={24}
                className="h-auto w-auto"
              />
            </Link>
            <Link href='/'>
              <Image
                src="/images/social/Instagram-white.png"
                alt="back-arrow"
                width={24}
                height={24}
                className="h-auto w-auto"
              />
            </Link>
            <Link href='/'>
              <Image
                src="/images/social/Twiter-white.png"
                alt="back-arrow"
                width={24}
                height={24}
                className="h-auto w-auto"
              />
            </Link>
            </div>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer