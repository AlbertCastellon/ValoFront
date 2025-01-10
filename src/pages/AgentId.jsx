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
  useEffect(() =>  {
    fetchData()
  }, [uuid])
  return (
    <>
      <h1>{info.displayName}</h1>
      <p>{info.description}</p>
      <img className="profilePic" src={info.fullPortrait} alt="profile picture"/>
      <ul>
        {info.abilities &&
        info.abilities.map(ability => (<li>{ability.displayName}<p>{ability.description}</p></li>))
        }
      </ul>    
       
    </>
  )
}

export default AgentId
