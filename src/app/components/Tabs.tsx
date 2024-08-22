'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";


const Tabs = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between h-10 w-full">
      <Link 
        href='/' 
        className={
          `flex justify-center items-center h-full w-1/2 border-b-2 ${pathname === "/" ? "border-primary-700" : "border-transparent text-secondary-300"}`
        }
      >
        Recargar Saldo
      </Link>
      <Link 
        href='/premios'
        className={
          `flex justify-center items-center h-full w-1/2 border-b-2 ${pathname === "/premios" ? "border-primary-700" : "border-transparent text-secondary-300"}`
        }
      >
        Retirar Premios
      </Link>
    </div>
  )
}

export default Tabs