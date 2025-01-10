import '../App.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
       <>
            <header>
                <h2>VALORANT</h2>
                <nav>
                    <Link to="/"><div>Home</div></Link>
                    <Link to="/agents"><div>Agents</div></Link>                    
                    <Link to=""><div></div></Link>
                </nav>
            </header>
       </> 
    )
}

export default Header