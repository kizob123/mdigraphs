import { useEffect, useRef, useState } from "react"

export default function Bar({n,year,max,data}) {
    console.log(data);
    let top = ( 1.1*max -Math.abs(year[Object.keys(year)[0]]))*max *10/2
    let h = (year[Object.keys(year)[0]])*max/2 *10
    return(
        
        <div className="bar" style={
            {top:top+"%",height:h+"%"}} onMouseOver={
                ()=>{
                    let d=data.filter(a => ""+a.year === Object.keys(year)[0])
                    console.log(d,Object.keys(year)[0],data);
                   d.forEach((v)=>{
                //     document.querySelector(".bar").setAttribute("style",`background:green; top:${top}%;height:${h}%`)
                     document.querySelector(".info-tab").innerHTML=`<p>${v.year}, ${v.awardName}, ${v.category}<br/> ${v.nominations.names[0].legacyNameText},</p>`
                })
            }
            } 
                   
                
            //}
            // onMouseOut={
            //     () => {
            //         document.querySelector(".bar").setAttribute("style", "background:rgb(191, 193, 233);")
                    
            //         document.querySelector(".info-tab").innerHTML = ``
            //     }
            //}
            >
            <p className="year-p">{Object.keys(year)[0]}</p>
            
            </div>
        
        
    )
}