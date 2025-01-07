import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Agents from './pages/Agents'
import './App.css'
import AgentId from './pages/AgentId'

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/agents' element={<Agents />} /> 
          <Route path='/agents/:uuid' element={<AgentId />}/> 
        </Routes>
      </Router>
 
  )
}

export default App
