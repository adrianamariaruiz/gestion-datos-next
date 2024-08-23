import Navbar from "../components/Navbar"
import Tabs from "../components/Tabs"

const page = () => {
  return (
    <div className="flex min-h-screen flex-col pt-14">
      <Navbar/>
      <Tabs/>
      <section className="pt-8 flex justify-center">
        <h1>
          Retirar Premios
        </h1>
      </section>
    </div>
  )
}

export default page