import React from 'react'
import { useHistory } from "react-router-dom";
export default function Submitted() {
    const history = useHistory();
    
    const handleClick= ()=>  history.push('/dashboard')
    
    return (
        <div>
            <h1>SUBMITTED!</h1>
            <button type="button" onClick={handleClick} class="btn btn-primary">RETURN TO DASHBOARD</button>
        </div>
    )
}
