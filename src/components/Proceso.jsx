import coche from "../assets/coche.png"
import propuesta from "../assets/propuesta.png"
import check from "../assets/check.png"
import herramientas from "../assets/herramientas.png"
import cochecheck from "../assets/cochecheck.png"

const Proceso = () => {
  return (
    <div id="proceso" className="p-4 mt-20 bg-gray-100">
      <h1 className=" text-xl text-center font-bold">Nuestro Proceso de Servicio</h1>
    <div className="p-4 mt-4 flex flex-row gap-8 overflow-x-auto md:items-center md:justify-center md:gap-28">
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg text-center min-w-40 h-28 p-4 md:w-60">
            <img src={coche} alt="diagnostico" 
            className="w-12 h-12"
            />
            <p className="text-sm font-bold">Revisión / Diagnóstico Inicial</p>
        </div>
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg text-center min-w-40 h-28 p-4 md:w-60">
            <img src={propuesta} alt="propuesta" 
            className="w-12 h-12"
            />
            <p className="text-sm font-bold">Presupuesto Detallado</p>
        </div>
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg text-center min-w-40 h-28 p-4 md:w-60">
            <img src={check} alt="check" 
            className="w-12 h-12"
            />
            <p className="text-sm font-bold">Aprobación del Cliente</p>
        </div>
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg text-center min-w-40 h-28 p-4 md:w-60">
            <img src={herramientas} alt="herramientas" 
            className="w-12 h-12"
            />
            <p className="text-sm font-bold">Reparación y/o Mantenimiento</p>
        </div>
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg text-center min-w-40 h-28 p-4 md:w-60">
            <img src={cochecheck} alt="cochecheck" 
            className="w-12 h-12"
            />
            <p className="text-sm font-bold">Entrega y Seguimiento</p>
        </div>
    </div>
    </div>
  )
}

export default Proceso
