import { useState, useEffect } from 'react'
const AgentCard = ({ agent }) => {
    if(!agent.role){
        return
    }else{
    return (
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
    )
}
}

export default AgentCard