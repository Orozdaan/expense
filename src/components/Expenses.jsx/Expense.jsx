
import React from "react"
import ExpenseItem from "./ExpenseItem"
import './Expense.css'
import Card from '../UI/Card'
 function Expense(props){
   return(
     <>
     {props.data.map((el)=>{
       return(
           <Card className="expenses">
             <h1>Hello</h1>
           <ExpenseItem
           title ={el.title}
           amount={el.amount}
           date={el.date}
           />
           </Card>
           )
          })}
     
     </>
   )
 }
 export default Expense