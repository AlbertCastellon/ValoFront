import { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'
import AgentCard from '../components/AgentCard'
const url = "https://valorant-api.com/v1/agents"

function Agents() {
  const [info, setInfo] = useState([])
  const fetchData = async () => {
    const data = await axios.get(url)
    setInfo(data.data.data)
  }
  useEffect(() =>  {
    fetchData()
  }, [])
  return (
    <>
      <h1>Valorant</h1>
        <div className='agentsPool'>
          {info.map(agent => <AgentCard agent={agent}/>)}
        </div>
        {console.log(info)}
    </>
  )
}

export default Agents
