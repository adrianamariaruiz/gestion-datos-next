
const SelectImport = () => {

  const optionsImport = [5, 10, 20, 50]

  return (
    <div className="p-4 mt-4">
      <p className="font-bold mb-4">Selecciona Importe a Añadir:</p>
      
      <form action="" className="flex flex-col relative">
        <input 
          type="text" 
          placeholder="Importe (€)"
          className="border-2 border-black rounded-md px-4 py-4 text-base"
        />
        <label htmlFor="" className="absolute -top-2 left-3 bg-white px-2 text-xs">Importe (€)</label>
      </form>
      
      <div className="mt-4 flex flex-col gap-2">
      <p>Importe mínimo 1€</p>
      <div className="flex justify-center gap-2">
        {
          optionsImport.map( opt => (
            <button key={opt} className="w-full bg-primary-100 px-3 py-1 rounded-md">{opt} €</button>
          ) )
        }
      </div>
      </div>
    </div>
  )
}

export default SelectImport