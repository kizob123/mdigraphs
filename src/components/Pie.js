import { useEffect } from "react"

export default function Pie({max,year}){
    console.log("yyy",year);
    useEffect(()=>{
        let ang=[]
        let s=year.reduce((t,v)=>t+v[Object.keys(v)[0]],0)
        ang=year.map((v) =>v[Object.keys(v)[0]]/s)
        
       

    })
    return(
        <canvas className = "pie">
           
        </canvas>
    )
}