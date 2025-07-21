import fotolino from "../assets/fotolino.jpg";

const Sobremi = () => {
  return (
    <div id="quiensoy" className="p-4 mt-20">
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-6xl mx-auto">
        <img
          src={fotolino}
          alt="fotolino"
          className="w-full md:w-[400px] h-auto rounded-lg shadow-md object-cover"
        />
        <div className="mt-6 md:ml-20 md:flex-1 md:mt-0">
          <h1 className="text-center md:text-center font-bold text-2xl">Quién Soy</h1>
          <p className="text-md text-justify text-gray-600 mt-6 leading-relaxed">
            Soy mecánico automotriz con más de 10 años de experiencia en diagnóstico y
            reparación de todo tipo de vehículos.
            
            Cuento con escáneres automotrices de última generación, capaces de detectar
            fallas en sistemas electrónicos, motores, transmisiones, frenos ABS y más.
            
            Mi compromiso es ofrecerte un diagnóstico preciso y un servicio honesto,
            rápido y profesional.
            
            Si tu vehículo presenta alguna falla, estoy listo para ayudarte con
            tecnología y experiencia.
          </p>
          <p className="text-md text-justify text-gray-600 mt-4 leading-relaxed">Ofrezco servicios de mecánica general —como mantenimiento preventivo, cambio de aceite, correas, frenos, tren delantero, entre otros— así como trabajos de electricidad automotriz, asegurando un funcionamiento óptimo del sistema eléctrico del vehículo.

            Cada servicio es realizado con dedicación y precisión, buscando siempre que tu auto salga en mejores condiciones de las que entró. Mi objetivo es que cada cliente se sienta respaldado, con la tranquilidad de dejar su vehículo en manos de alguien que realmente se preocupa por su seguridad y rendimiento.

            Gracias por confiar en mi trabajo. ¡Estoy aquí para ayudarte a mantener tu vehículo en su mejor estado!</p>
        </div>
      </div>
    </div>
  );
};

export default Sobremi;