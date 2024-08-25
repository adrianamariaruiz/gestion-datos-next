import Image from "next/image";
import Button from "./Button"
import Link from "next/link";

const Sidebar = () => {

  const sections = [
    {
      id: 1,
      title: "Mi Cuenta",
      items: [
        { id: 1, icon: "/images/sidebar/User.png", info: "Mis Datos Personales" },
        { id: 2, icon: "/images/sidebar/Price.png", info: "Datos Bancarios" },
        { id: 3, icon: "/images/sidebar/Home.png", info: "Direcciones" },
        { id: 4, icon: "/images/sidebar/Notification.png", info: "Mis Notificaciones" },
      ],
    },
    {
      id: 2,
      title: "Historial",
      items: [
        { id: 1, icon: "/images/sidebar/Bets.png", info: "Mis Apuestas" },
        { id: 2, icon: "/images/sidebar/Renewal.png", info: "Mis Renovaciones" },
        { id: 3, icon: "/images/sidebar/Moves.png", info: "Mis Movimientos" },
        { id: 4, icon: "/images/sidebar/Send.png", info: "Mis Envios" },
      ],
    },
    {
      id: 3,
      title: "Ayuda y Contacto",
      items: [
        { id: 1, icon: "/images/sidebar/Question.png", info: "Preguntas Frecuentes" },
        { id: 2, icon: "/images/sidebar/Cart.png", info: "Nuestros productos" },
        { id: 3, icon: "/images/sidebar/Contact.png", info: "Contacto" },
      ],
    },
  ];

  return (
    <aside className="w-full h-32 flex flex-col items-center gap-4">
      {/* primera card */}
      <section className="bg-white w-full flex flex-col items-center justify-between rounded-lg p-4 gap-6 shadow-md">
        <div className="w-full flex justify-between items-center font-bold">
          <h2>Hilla Amanda</h2>
          <Button className="bg-yellow-500 h-6 max-w-fit text-xs flex items-center">Saldo: 10,00 €</Button>
        </div>
        <div className="w-full flex justify-between gap-4">
          <Button className="text-sm border border-black py-2 px-2 hover:text-white xl:px-6">Retirar Premios</Button>
          <Button className="text-sm py-2 px-2 bg-primary-500 text-white xl:px-6">Recargar Saldo</Button>
        </div>
      </section>

      {/* segunda card */}
      <section className="bg-white w-full flex flex-col rounded-lg p-2 gap-6 shadow-md text-sm">
        {
          sections.map((data) => (
            <div className="w-full flex flex-col gap-3" key={data.id}>
              <h3 className="font-bold pb-1">{data.title}</h3>
              {data.items.map((item) => (
                <Link key={item.id} className="flex gap-2 items-center pl-2 hover:text-primary-500" href="/">
                  <span>
                    <Image src={item.icon} alt={item.info} width={16} height={16}/>
                  </span> 
                  {item.info}
                </Link>
              ))}
            </div>
          ))
        }

        <section className="w-full flex justify-center">
          <Link href='/' className="underline flex gap-2 hover:text-primary-500">
            <span><Image src='/images/sidebar/Logout.png' alt='Logout' width={16} height={16} /></span>
            Cerrar Sesión
          </Link>
        </section>
      </section>

    </aside>
  )
}

export default Sidebar