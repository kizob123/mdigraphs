import { useEffect, useRef, useState } from "react"

export default function Bar({n,year,max,data}) {
    
    
    return(
        
        <div className="bar" style={
            {top:(2*max-year[Object.keys(year)[0]])*30/max+"%",height:(year[Object.keys(year)[0]])*30/max+"%"}}>
            <p className = "number-p"
            style = {{}}>{year[Object.keys(year)[0]]}</p><p className="year-p">{Object.keys(year)[0]}</p></div>
        
        
    )
}