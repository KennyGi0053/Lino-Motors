import motor from "../assets/motor.gif"
import mecanico from "../assets/mecanico.gif"
import fusible from "../assets/fusible.gif"
import piston from "../assets/piston.gif"


const Especialiadades = () => {
  return (
    <div className='p-4 mt-4'>
      <h1 className='text-xl text-center font-bold'>Especialidades y Servicios</h1>
      <div className='flex flex-col items-center justify-center mt-6 md:flex-row md:gap-20 gap-6'>
        <div className='flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-80 md:w-80 '>
        <img src={motor} alt="motor"
        className="w-16 h-16"
        />
        <p className='font-medium mt-4'>Diagnóstico Computarizado</p>
        <p className='text-sm text-center mt-2 text-gray-500'>Tecnología de última generación para diagnóstico preciso</p>
        </div>

        <div className='flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-80 md:w-80 '>
        <img src={mecanico} alt="mecanico"
        className="w-16 h-16"
        />
        <p className='font-medium mt-4'>Mecánica General</p>
        <p className='text-sm text-center mt-2 text-gray-500'>Mantenimientos preventivos y correctivos para que tu vehículo siempre esté en óptimas condiciones</p>
        </div>

        <div className='flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-80 md:w-80 '>
        <img src={fusible} alt="fusible" 
        className="w-16 h-16"
        />
        <p className='font-medium mt-4'>Sistemas Eléctricos</p>
        <p className='text-sm text-center mt-2 text-gray-500'>Expertos en reparación y mantenimiento de sistemas eléctricos automotrices</p>
        </div>

        <div className='flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-80 md:w-80 '>
        <img src={piston} alt="fusible" 
        className="w-16 h-16"
        />
        <p className='font-medium mt-4'>Sistema de Inyección</p>
        <p className='text-sm text-center mt-2 text-gray-500'> Diagnóstico y reparación de sistemas de inyección electrónica y bombas de gasolina</p>
        </div>
        
      </div>
    </div>
  )
}

export default Especialiadades
