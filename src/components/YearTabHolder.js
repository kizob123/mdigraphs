import YearTab from "./YearTab";

export default function YearTabHolder({max,year}){

    return(
        <div className = "yeartabholder"
        style = {
            {
                top: 30 + "%",
                height:30 + "%",
                width:5+"%"
                
            }
        }>
            {year.map((y,i)=><YearTab key={i} max={max} year={y}></YearTab>)}
        </div>
    )
}