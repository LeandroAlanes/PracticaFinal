import { Route, Routes } from "react-router-dom"
import { Acordeon } from "./components/Acordeon"
import { Card } from "./components/Card"
import { Carrusel } from "./components/Carrusel"
import { Home } from "./pages/Home"
import { OfertasCursos } from "./pages/OfertasCursos"

function App() {
  return (
    <Routes>
      <Route path="/"element={ <Home></Home>} >  </Route>
      <Route path="/ofertas"element={ <OfertasCursos></OfertasCursos> } >  </Route>
      
    </Routes>
    
  )
}

export default App
