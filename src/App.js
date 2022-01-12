
import Expenses  from "./components/Expenses.jsx/Expense"
import Card from './components/UI/Card'

function App() {
  // Data from backend
  const expenses= [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 1.5,
          date: new Date(2020 ,  7 , 14)
        },
        {
          id:'e2',
          title:' Car Insurense',
          amount: 200,
          date: new Date(2021,2,28)
        },
        {
          id:'e3',
          title:'mixer',
          amount: 500,
          date: new Date(2021,2,28)
        },
        {
          id:'e4',
          title:'clean the dishes',
          amount: 1000,
          date: new Date(2021,2,28)
        },
      ]
  //   return <div className='App'>
  //   <ExpenseItem
  //    title={expenses[0].title} 
  //   amount= {expenses[0].amount} 
  //   date={expenses[0].date}
  //   />
  //   <ExpenseItem
  //    title={expenses[1].title} 
  //   amount= {expenses[1].amount} 
  //   date={expenses[1].date}
  //   />
  //   <ExpenseItem
  //    title={expenses[2].title} 
  //   amount= {expenses[2].amount} 
  //   date={expenses[2].date}
  //   />
  //   <ExpenseItem
  //    title={expenses[3].title} 
  //   amount= {expenses[3].amount} 
  //   date={expenses[3].date}
  //   />
    
  // </div>
   
return(
 <Card>
   <h1>Let's get started</h1>
   <Expenses data={expenses}/>

 </Card>
);
}
export default App;
