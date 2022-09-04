import Chart from "./Chart";
import CountTab from "./CountTab";

    export default function ChartScreen(){
        function getSomeStats(data){
            console.log(data);
        }
        return(
            <div className="chartscreen">
                
                <Chart></Chart>
            </div>
        )
    }