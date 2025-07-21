import { useState } from "react"
import { Menu, X } from "lucide-react"
import logo from "../assets/logolinomotors3.png"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setOpen(false)
    }
  }

  const sections = [
    { id: "inicio", label: "Inicio" },
    { id: "servicios", label: "Servicios" },
    { id: "quiensoy", label: "Quién Soy"},
    { id: "proceso", label: "Nuestro Proceso de Servicio" },
    { id: "por-que-elegirnos", label: "¿Por Qué Elegirnos?" },
    { id: "contacto", label: "Contacto" },
  ]

  return (
    <nav className="w-full md:h-28 bg-black">
      <div className="flex items-center justify-between">
        <img src={logo} alt="logo" className="h-28 ml-6" />

        {/* Botón hamburguesa */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-200 focus:outline-none cursor-pointer"
        >
          {open ? <X className="w-6 h-6 mr-4" /> : <Menu className="w-6 h-6 mr-4" />}
        </button>

        {/* Menú en desktop */}
        <div className="hidden md:flex flex-row items-center space-x-10 mr-10">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-gray-200 text-md font-medium hover:text-[#004aeb] transition cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Menú en móvil */}
      {open && (
        <div className="flex flex-col border-b border-gray-300 shadow-md md:hidden gap-4 mt-2 px-4 pt-1 bg-gray-100">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-gray-500 text-sm text-left cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar