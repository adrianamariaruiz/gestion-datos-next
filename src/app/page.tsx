
import Balance from "./components/Balance";
import PaymentMethod from "./components/PaymentMethod";
import SelectImport from "./components/SelectImport";
import Tabs from "./components/Tabs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-14 mb-16">
      <Tabs/>
      <Balance/>
      <SelectImport/>
      <PaymentMethod/>
    </main>
  );
}
