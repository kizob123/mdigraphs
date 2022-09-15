import Bar from "./Bar";
import axios from "axios";
import React, { PureComponent, useEffect,useState } from "react";
import YearTabHolder from "./YearTabHolder";
import CountTab from "./CountTab";
import Pie from "./Pie";
export default function Chart(gdata){
    const [awards, setAwards]=useState(null)
    const [maxYear, setMaxYear] = useState(0)
    const [years, setYears]= useState(null)
    console.log("oooo");
    const options = {
       method: 'GET',
       //url: "http://localhost:9000/data",
       url: 'https://imdb8.p.rapidapi.com/actors/get-awards',
        params: {
            nconst: 'nm0001667'
        },
        headers: {
            
            'X-RapidAPI-Key': '3e45ad3dd0mshcbb9d708319ac5cp1ced1bjsnc77ff90135f5',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    }
    const getData=async()=>{
        
        console.log("ooo2");
        let 
           { data}
         = await axios( /*'https://imdb8.p.rapidapi.com/actors/get-awards'*/ options)
         console.log(data);
         
        //console.log(/*data.resource.*/res.body);
        let years ={}
       data.resource.awards.forEach(element => {
            if(element.isWinner){
                if (!years[element.year])
                    years[element.year]=0

                    years[element.year]+=1
        }
        });
        let yearArray= []
        
        let mx=maxYear
        for(let y in years){
            let obj={}
            obj[y]=years[y]
            if(years[y]>mx)
            mx = years[y]

            yearArray.push(obj)
        }
        setYears(yearArray)
        setMaxYear(mx)
        setAwards(data.resource.awards)
    }
    useEffect(()=>{
        getData()
        
    },[])
    return(
        <div className="chart">
            {years&&<CountTab year ={years}></CountTab>}
            <div className="graph">

            <div className="bar-in">
            <div className="lab">
                Bar Chart<br/><br/><br/>awards
            </div>
            {years&&<YearTabHolder max={maxYear} year={years}></YearTabHolder>}
            {years&&years.map((year, i)=><Bar key={i} n={i} year={year} max={maxYear} data={awards}></Bar>)}
            <div style = {
                {
                    height: maxYear*maxYear / 2 * 10 +'%',
                    top: (1.1 * maxYear - maxYear) * maxYear * 10/ 2+'%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent:'flex-end',
                    position:'relative',
                    marginLeft:'8px',
                    fontWeight:'bold'
                }
            }>
               <div>year</div> 
                </div>
            </div>
            
            </div>
            {/* <div style = {
                {
                  margin:"10px 0 0 0", position:"relative",left:50+'px', top:((10-maxYear)*maxYear- maxYear*maxYear+3)+'%', height:2+'px',background:'black',width:years&&(6*years.length+10+"%")
                }
            }> </div> */}
        </div>
    )
}