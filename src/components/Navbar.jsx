import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logolinomotors5.png"
const Navbar = () => {

      const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // Cierra el menú en móvil
    }
  };
  return (
    <nav className="w-full h-30 bg-black">
        <div className="flex items-center justify-between">
        <img 
        src={logo} 
        alt="logo"
        className="h-30 ml-6 "
        />
 {/* Botón hamburguesa en pantallas pequeñas */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-200 focus:outline-none"
        >
          {open ? <X className="w-6 h-6 mr-4" /> : <Menu className="w-6 h-6 mr-4" />}
        </button>

        {/* Menú horizontal en desktop */}
        <div className="hidden md:flex flex-row items-center space-x-10 mr-10">
          {["inicio", "sobremi", "proyectos", "habilidades", "contacto"].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-gray-200 text-md font-medium hover:text-[#004aeb] transition"
            >
              {id.charAt(0).toUpperCase() + id.slice(1).replace("mi", " Mí")}
            </button>
          ))}
        </div>
      </div>

      {/* Menú desplegable en móvil */}
      {open && (
        <div className="flex flex-col md:hidden gap-4 mt-2 px-4">
          {["inicio", "sobremi", "proyectos", "habilidades", "contacto"].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-gray-500 text-sm text-left"
            >
              {id.charAt(0).toUpperCase() + id.slice(1).replace("mi", " Mí")}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
