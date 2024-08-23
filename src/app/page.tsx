
import Balance from "./components/Balance";
import Navbar from "./components/Navbar";
import PaymentMethod from "./components/PaymentMethod";
import SelectImport from "./components/SelectImport";
import Tabs from "./components/Tabs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-14">
      <Navbar/>
      <Tabs/>
      <Balance/>
      <SelectImport/>
      <PaymentMethod/>
    </main>
  );
}
