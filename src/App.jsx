
import './App.css'
import Portada from './components/Portada'
import Especialiadades from './components/Especialiadades'
import Proceso from './components/Proceso'
import Elegirnos from './components/Elegirnos'
import Navbar from './components/Navbar'
import Contacto from './components/Contacto'

function App() {

  return (
    <div>
      <Navbar/>
      <Portada/>
      <Especialiadades/>
      <Proceso/>
      <Elegirnos/>
      <Contacto/>
    </div>
  )
}

export default App
