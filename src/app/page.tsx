
import Balance from "./components/Balance";
import Navbar from "./components/Navbar";
import PaymentMethod from "./components/PaymentMethod";
import SelectImport from "./components/SelectImport";
import Sidebar from "./components/Sidebar";
import Tabs from "./components/Tabs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mb-16">
        <Navbar titleNavbar={'Gestion de Saldo'} linkRedirect={'/'}/>
      <div className="w-full flex justify-center lg:pt-8 lg:gap-10 lg:px-10">
        <div className="mt-14 xl:ml-24">
          <Tabs/>
          <Balance/>
          <SelectImport/>
          <PaymentMethod/>
        </div>
        <div className="hidden lg:flex lg:w-2/6">
          <Sidebar/>
        </div>
      </div>
    </main>
  );
}
