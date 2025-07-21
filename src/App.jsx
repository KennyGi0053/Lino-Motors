
import './App.css'
import Portada from './components/Portada'
import Especialiadades from './components/Especialiadades'
import Proceso from './components/Proceso'
import Elegirnos from './components/Elegirnos'
import Navbar from './components/Navbar'
import Contacto from './components/Contacto'
import Sobremi from './components/Sobremi'

function App() {

  return (
    <div>
      <Navbar/>
      <Portada/>
      <Especialiadades/>
      <Sobremi/>
      <Proceso/>
      <Elegirnos/>
      <Contacto/>
    </div>
  )
}

export default App
