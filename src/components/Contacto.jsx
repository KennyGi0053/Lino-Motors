import llamar from "../assets/llamar.png"
import whatsapp from "../assets/whatsapp.png"
import reloj from "../assets/reloj.png"

const Contacto = () => {
  return (
    <div id="contacto" className="p-4 mt-20">
      <h1 className="text-xl font-bold text-center">Contacto</h1>

      {/* Contenedor en dos columnas */}
      <div className="p-6 flex flex-col md:flex-row gap-8 md:mt-6">

        {/* Columna Izquierda - Información de Contacto */}
        <div className="md:w-1/2 md:ml-40">
          <h2 className="font-semibold">Información de Contacto</h2>

          {/* Teléfono */}
          <a
            href="tel:+584120238676"
            className="mt-4 flex flex-row items-center"
          >
            <img src={llamar} alt="llamar" className="w-10 h-10" />
            <div className="ml-4">
              <p className="text-sm font-bold">Teléfono</p>
              <p className="text-sm text-gray-500">+58 412-0238676</p>
            </div>
          </a>

          {/* Whatsapp */}
          <a
          href="https://wa.me/584120238676"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex flex-row items-center"
          >
          <img src={whatsapp} alt="whatsapp" className="w-10 h-10" />
          <div className="ml-4">
          <p className="text-sm font-bold">Whatsapp</p>
          <p className="text-sm text-gray-500">+58 412-0238676</p>
        </div>
        </a>

          {/* Horario */}
          <div className="mt-6 flex flex-row items-center">
            <img src={reloj} alt="reloj" className="w-10 h-10" />
            <div className="ml-4">
              <p className="text-sm font-bold">Horario</p>
              <p className="text-sm text-gray-500">Lunes a Viernes - 9:00 am a 6:00 pm</p>
            </div>
          </div>
        </div>

        {/* Columna Derecha - Mapa */}
        <div className="md:w-1/2 md:mr-40">
          <h2 className="font-semibold mt-6 md:mt-0">Ubicación</h2>
          <div className="w-full h-72 rounded overflow-hidden shadow-md mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1961.5472202079825!2d-66.91276252269743!3d10.49322114032303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a5f2942ffffff%3A0xc1bff97c8c96ad93!2sResidencias%20Vuelta%20del%20Casquillo!5e0!3m2!1ses!2sve!4v1753056116510!5m2!1ses!2sve"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto