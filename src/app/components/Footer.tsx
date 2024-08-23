import Image from "next/image"

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full h-16 bg-white shadow-top">
      <div className=" h-full flex items-center justify-around">

        <div className="flex flex-col items-center text-sm">
          <Image
            src="/images/icons/Home16px.png"
            alt="back-arrow"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <p>Inicio</p>
        </div>
        <div className="flex flex-col items-center text-sm">
          <Image
            src="/images/icons/Results16px.png"
            alt="back-arrow"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <p>Resultados</p>
        </div>
        <div className="flex flex-col items-center text-sm">
          <Image
            src="/images/icons/Questiongrey16px.png"
            alt="back-arrow"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <p>Ayuda</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer