
import Balance from "./components/Balance";
import PaymentMethod from "./components/PaymentMethod";
import SelectImport from "./components/SelectImport";
import Sidebar from "./components/Sidebar";
import Tabs from "./components/Tabs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-14 mb-16 lg:gap-10 lg:flex-row">
      <div className="lg:w-1/2 lg:mt-14 lg:ml-24">
        <Tabs/>
        <Balance/>
        <SelectImport/>
        <PaymentMethod/>
      </div>
      <div className="hidden lg:flex lg:w-2/6 lg:mt-14">
        <Sidebar/>
      </div>
    </main>
  );
}
