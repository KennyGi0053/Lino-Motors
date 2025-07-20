import verificado from "../assets/tanteador.png"
import tecnologia from "../assets/tecnologia.png"
import garantizado from "../assets/garantizado.png"
import mecanico from "../assets/mecanico.png"
const Elegirnos = () => {


  return (
    <div className="p-4 mt-6">
      <h1 className="text-xl font-bold text-center">¿Por Qué Elegirnos?</h1>
      <div className="flex flex-col items-center justify-center text-center mt-2 md:flex-row md:gap-40">
        <div className="flex flex-col items-center">
        <img 
        src={verificado} alt="verificado" 
        className="w-16 h-16 mt-6"
        />
        <h2 className="mt-2 font-bold">Experiencia y Profesionalismo</h2>
        <p className="mt-2 text-sm text-gray-500">Más de 10 años de experiencia en el sector automotriz</p>
        </div>

        <div className="flex flex-col items-center">
         <img 
        src={tecnologia} alt="tecnologia" 
        className="w-16 h-16 mt-6"
        />
        <h2 className="mt-2 font-bold">Tecnología Avanzada</h2>
        <p className="mt-2 text-sm text-gray-500">Equipamiento de última generación</p>
        </div>

        <div className="flex flex-col items-center">
         <img 
        src={garantizado} alt="garantizado" 
        className="w-16 h-16 mt-6"
        />
        <h2 className="mt-2 font-bold">Servicio Garantizado</h2>
        <p className="mt-2 text-sm text-gray-500">Garantía en todos nuestros trabajos</p>
        </div>

        <div className="flex flex-col items-center">
         <img 
        src={mecanico} alt="mecanico" 
        className="w-16 h-16 mt-6"
        />
        <h2 className="mt-2 font-bold">Atención Personalizada</h2>
        <p className="mt-2 text-sm text-gray-500">Servicio adaptado a tus necesidades</p>
        </div>
      </div>
    </div>
  )
}

export default Elegirnos
