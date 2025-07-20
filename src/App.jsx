
import './App.css'
import Portada from './components/Portada'
import Especialiadades from './components/Especialiadades'
import Proceso from './components/Proceso'
import Elegirnos from './components/Elegirnos'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <Navbar/>
      <Portada/>
      <Especialiadades/>
      <Proceso/>
      <Elegirnos/>
    </div>
  )
}

export default App
