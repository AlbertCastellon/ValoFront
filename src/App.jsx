import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Agents from './pages/Agents'
import './App.css'
import AgentId from './pages/AgentId'
import Home from './pages/Home'
import Header from './components/Header'

function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/agents' element={<Agents />} /> 
          <Route path='/agents/:uuid' element={<AgentId />}/> 
        </Routes>
      </Router>
 
  )
}

export default App
