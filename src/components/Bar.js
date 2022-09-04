import { useEffect, useRef, useState } from "react"

export default function Bar({n,year,max,data}) {
    console.log(data);
    
    return(
        
        <div className="bar" style={
            {top:(2*max-year[Object.keys(year)[0]])*20/max+"%",height:(year[Object.keys(year)[0]])*20/max+"%"}} onMouseOver={
                ()=>{
                    let d=data.filter(a => ""+a.year === Object.keys(year)[0])
                    console.log(d,Object.keys(year)[0],data);
                   d.forEach((v)=>{
                    document.querySelector(".info-tab").innerHTML = ``
                    document.querySelector(".info-tab").innerHTML=`<p>${v.year}, ${v.awardName}, ${v.category}<br/> ${v.nominations.names[0].legacyNameText},</p>`
                   }) 
                }
            }>
            <p className = "number-p"
            style = {{}}>{year[Object.keys(year)[0]]+" award"}{+year[Object.keys(year)[0]]>1?"s":""}</p><p className="year-p">{Object.keys(year)[0]}</p></div>
        
        
    )
}