import { Link } from 'react-router-dom'

const AgentCard = ({ agent }) => {
    if(!agent.role){
        return
    }else{
    return (
        <Link to={`./${agent.uuid}`}>
            <div className="agentCard">
                <img className="icon" src={agent.displayIcon} alt="icono" />
                <div className="footnote">
                    <div>
                        <h2>{agent.displayName}</h2>
                        <h4><img className="roleicon" src={agent.role.displayIcon} />{agent.role.displayName}</h4>
                    </div>
                    <div className={`role ${agent.role.displayName}`}></div>
                </div>     
            </div>
        </Link>
    )
}
}

export default AgentCard