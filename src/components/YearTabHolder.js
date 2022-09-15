import { logDOM } from "@testing-library/react";
import { useEffect, useState } from "react";
import YearTab from "./YearTab";

export default function YearTabHolder({max,year}){
    let [n,setN]=useState([])
    useEffect(()=>{
        console.log(n);
        let x = n
        console.log(x);
        for (let i = 0; i <= max; i++) {
            x[i] = i
        }
        
        console.log(x);
        setN(x)
    })
    return(
        <div className = "yeartabholder"
        style = {
            {
                top: (1.1*max-max )*max*10/2+ "%",
                height:max*max*10/2 + "%",
                width:5+"%"
                
            }
        }>
            
            {n.map((y,i)=><YearTab key={i} n={y} max={max}></YearTab>)}
        </div>
    )
}