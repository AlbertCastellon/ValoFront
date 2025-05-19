import '../App.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
       <>
            <header>
                <h2>VALORANT</h2>
                <nav>
                    <Link to="/" className='headerLink'><div>Home</div></Link>
                    <Link to="/agents" className='headerLink'><div>Agents</div></Link>                   
                    <Link to="" className='headerLink'><div></div></Link>
                </nav>
            </header>
       </> 
    )
}

export default Header