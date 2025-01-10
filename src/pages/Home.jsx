import '../App.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
       <>
            <Link to="/agents"><div>Agents</div></Link>
            <Link to=""><div></div></Link>
            <Link to=""><div></div></Link>
       </> 
    )
}

export default Home