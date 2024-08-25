'use client'

import Image from "next/image"
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "./Button";

const PaymentMethod = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [select, setSelect] = useState<string>("card-end");

  const router = useRouter();

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.id)
    setSelect(e.target.id)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(select)
    router.push('/results')
  }

  return (
    <div className="px-4 pt-2">
      <h2 className="pb-4 font-bold">Método de pago</h2>

      <div>
        <form onSubmit={handleSubmit} >
          <div className="flex flex-col justify-center gap-2 accent-black">

            <details 
              open={isOpen}
              className={`w-full rounded-lg p-2 ${
                select === "card" || select === "card-end" || select === "other-card" ? "border-2 border-primary-500" : "border border-black border-opacity-10"
              }`}
            >
              <summary className="list-none w-full">
                <div className="w-full flex gap-2 items-center justify-between ">
                  <label htmlFor="card" className="gap-2 flex items-center">
                    <input type="radio" id="card" name="payment-method"
                      onClick={() => setIsOpen(!isOpen)}
                      onChange={handleRadioChange}
                      checked={select === "card" || select === "card-end" || select === "other-card"}
                    
                    />
                    Tarjeta Bancaria
                    <Image
                      alt="question-icon"
                      src="/images/icons/Question16px.png"
                      width={16}
                      height={16}
                      className="h-4 w-4"
                    />
                  </label>
                  <div className="flex">
                    <span className="text-secondary-300 text-xs">Instantáneo</span>
                  </div>
                </div>
              </summary>
              <div className="flex flex-col gap-2 pl-5 pt-2">
                <label htmlFor="card-end" className="flex gap-2">
                  <input 
                    type="radio" 
                    id="card-end" 
                    name="card-option" 
                    onChange={handleRadioChange} 
                    checked={select === "card" || select === "card-end"}
                  />Tarjeta terminada en 0909
                </label>
                <label htmlFor="other-card" className="flex gap-2">
                  <input 
                    type="radio" 
                    id="other-card" 
                    name="card-option" 
                    onChange={handleRadioChange} 
                    checked={select === "card" || select === "other-card"}
                  />Utilizar otra tarjeta
                </label>
              </div>
            </details>

            <div 
              className={`w-full flex gap-2 items-center justify-between rounded-lg p-2 ${
                select === "bizum" ? "border-2 border-primary-500" : "border border-black border-opacity-10"
              }`}
            >
              <label htmlFor="bizum" className="gap-2 flex items-center">
                <input 
                  type="radio" 
                  id="bizum" 
                  name="payment-method" 
                  onChange={handleRadioChange} 
                  checked={select === "bizum"}
                />
                  Bizum
                <Image
                  alt="question-icon"
                  src="/images/icons/Question16px.png"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
              </label>
              <div className="flex">
                <span className="text-secondary-300 text-xs">Importe mínimo 10€</span>
              </div>
            </div>

            <div className={`w-full flex gap-2 items-center justify-between rounded-lg p-2 ${
                select === "transfer" ? "border-2 border-primary-500" : "border border-black border-opacity-10"
              }`}
            >
              <label htmlFor="transfer" className="gap-2 flex items-center">
                <input type="radio" id="transfer" name="payment-method" onChange={handleRadioChange} checked={select === "transfer"}/>
                  Transferencia
                <Image
                  alt="question-icon"
                  src="/images/icons/Question16px.png"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
              </label>
              <div className="flex">
                <span className="text-secondary-300 text-xs">No instantáneo</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:items-center my-6 gap-4 lg:flex-row-reverse">
            <Button
              className={`${select.length === 0  ? "bg-primary-100 text-black" : "bg-primary-500 text-white"} lg:w-1/2`}
              disabled={select.length === 0}
              type="submit"
            >
              Recargar Cuenta
            </Button>
            
            <div className="flex items-center text-xs gap-4">
              <Image
                  alt="question-icon"
                  src="/images/icons/Security24px.png"
                  width={24}
                  height={24}
                  className="h-6 w-6"
              />
              <p>Todos los pagos en Dev Talenty son 100% seguros. Web certificada por Confianza Online.</p>  
            </div>  

          </div>
        </form>
      </div>
    </div>
  )
}

export default PaymentMethod