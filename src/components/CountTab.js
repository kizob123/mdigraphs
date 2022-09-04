export default function CountTab({year}){
    return(
        <div className="counts">
            Years Considered: {Object.keys(year[0])[0]} to {Object.keys(year[year.length-1])[0]}
        </div>
    )
}