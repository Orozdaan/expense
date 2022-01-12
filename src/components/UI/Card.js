import React from "react"
import'./Card.css'
function Card(props){
    const classes='card  '+props.className
    return(
<div className={classes}>{props.children}</div>
    )
// return(
    //   <div className="expenses">
    //     {props.data.map((el)=>{
    //       return(
    //         <ExpenseItem
    //         title={el.title}
    //         amount={el.amount}
    //         date={el.date}
    //         />
    //       )
    //     })}
  
    //   </div>
    // )


}
    

  
  export default Card