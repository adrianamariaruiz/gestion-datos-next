'use client'

import { useState } from "react";

const SelectImport = () => {

  const [selectedImport, setSelectedImport] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  const optionsImport = [5, 10, 20, 50]

  const handleButtonClick = (opt: number) => {
    console.log('funciona', opt)
    setSelectedImport(opt);
    setInputValue(opt.toString())
  }

  console.log(inputValue)

  return (
    <div className="p-4 mt-4">
      <p className="font-bold mb-4">Selecciona Importe a Añadir:</p>
      
      <form action="" className="flex flex-col relative">
        <input 
          type="text" 
          placeholder="Importe (€)"
          className="border-2 border-black rounded-md px-4 py-4 text-base"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <label htmlFor="" className="absolute -top-2 left-3 bg-white px-2 text-xs">Importe (€)</label>
      </form>
      
      <div className="mt-4 flex flex-col gap-2">
      <p>Importe mínimo 1€</p>
      <div className="flex justify-center gap-2 text-base font-semibold">
        {
          optionsImport.map( opt => (
            <button 
              key={opt} 
              onClick={() => handleButtonClick(opt)}
              className={`w-full h-10 px-3 py-1 rounded-md ${
                selectedImport === opt ? "bg-primary-700 text-white" : "bg-primary-100"
              }`}
            >
              {opt} €
            </button>
          ) )
        }
      </div>
      </div>
    </div>
  )
}

export default SelectImport
// #00A9E0
// bg-[#cceef9]