import Navbar from "../components/Navbar"
import Tabs from "../components/Tabs"

const page = () => {
  return (
    <div className="flex min-h-screen flex-col pt-14">
      <Navbar titleNavbar={'Gestion de Saldo'} linkRedirect={'/'}/>
      
      <section className="pt-8 flex flex-col lg:ml-20">
      <Tabs/>

      <div className="h-96 flex justify-center items-center">
        <h1>
          Retirar Premios
        </h1>
      </div>

      </section>
    </div>
  )
}

export default page