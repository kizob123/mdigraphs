import Bar from "./Bar";
import axios from "axios";
import React, { PureComponent, useEffect,useState } from "react";
import YearTabHolder from "./YearTabHolder";
import CountTab from "./CountTab";
export default function Chart(gdata){
    const [awards, setAwards]=useState(null)
    const [maxYear, setMaxYear] = useState(0)
    const [years, setYears]= useState(null)
    
    const options = {
        method: 'GET',
        params: {
            nconst: 'nm0001667'
        },
        headers: {
            
            'X-RapidAPI-Key': '3e45ad3dd0mshcbb9d708319ac5cp1ced1bjsnc77ff90135f5',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    }
    const getData=async()=>{
        

        let {
            data
        } = await axios.get('https://imdb8.p.rapidapi.com/actors/get-awards',options)
        console.log(data.resource.awards);
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
            {years&&<CountTab year ={years} ></CountTab>}
            {years&&<YearTabHolder max={maxYear} year={years}></YearTabHolder>}
            {years&&years.map((year, i)=><Bar key={i} n={i} year={year} max={maxYear} data={awards}></Bar>)}
        </div>
    )
}