import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import '../App.css'
const url = "https://valorant-api.com/v1/agents"

function AgentId() {
    const { uuid } = useParams()
    const [info, setInfo] = useState([])
    const fetchData = async () => {
    const data = await axios.get(url + '/' + uuid)
    setInfo(data.data.data)
  }
  const abilityKeys = {
    Ability1: 'Q',
    Ability2: 'E',
    Grenade: 'C',
    Ultimate: 'X',
    Passive: 'Passive'
  }
  useEffect(() =>  {
    fetchData()
  }, [uuid])
  return (
    <div className='agentPage'>
      <h1>{info.displayName}</h1>
      <div className='agentProfile'>
        <img className="profilePic" src={info.fullPortrait} alt="profile picture"/>
        <div className='agentText'>
          <p className='agentDescription'>{info.description}</p>
          <ul className='agentAbilities'>
            {info.abilities &&
            info.abilities.map(ability => (<li>{abilityKeys[ability.slot]}: {ability.displayName}<p>{ability.description}</p></li>))
            }
          </ul>  
        </div>  
      </div>
    </div>
  )
}

export default AgentId
