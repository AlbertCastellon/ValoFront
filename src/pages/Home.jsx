import '../App.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
       <>
            <Link to="/agents"><div className='homeLinks'><img src='/agents.jpg' />Agents</div></Link>
            <Link to=""><div className=''></div></Link>
            <Link to=""><div className=''></div></Link>
       </> 
    )
}

export default Home