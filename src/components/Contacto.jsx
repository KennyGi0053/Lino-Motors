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
              src="https://www.google.com/maps/place/Caracas,+Distrito+Capital/data=!4m2!3m1!1s0x8c2a58adcd824807:0x93dd2eae0a998483?sa=X&ved=1t:242&ictx=111"
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