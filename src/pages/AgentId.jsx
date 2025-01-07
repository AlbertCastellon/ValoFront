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
  }, [])
  console.log(info)
  return (
    <>
      <h1>{info.displayName}</h1>
      <img className="profilePic" src={info.fullPortrait} alt="profile picture"/>
      <p>{info.description}</p>
       
    </>
  )
}

export default AgentId
