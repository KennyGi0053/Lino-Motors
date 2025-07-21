import imagen from "../assets/imagenmotor2.jpg"
const Portada = () => {

   const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }
  
 return (
    <div id="inicio" className="relative w-full h-[300px] md:h-[400px]">
      <img 
        src={imagen} 
        alt="image" 
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center md:items-start bg-black/50">
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center px-6 md:px-30">
          Servicio Automotriz Profesional
        </h1>
        <p className="text-white mt-4 text-lg font-light text-center md:px-30">
          Tecnología avanzada y experiencia profesional para el cuidado integral de tu vehículo
        </p>
        <button 
          onClick={() => scrollToSection("contacto")}
          className="bg-[#062991] mt-4 h-8 w-28 rounded-md text-white cursor-pointer md:ml-30"
        >
          Contáctame
        </button>      
        </div>
    </div>
  );
};

export default Portada;