import React, {useContext,useState} from 'react';
import {TranscationContext} from './transContext';

function Child() {
    let {transcations, addTranscation} = useContext(TranscationContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);

    const handleAddition = (event) => {
       event.preventDefault();
       if(Number(newAmount) === 0){
       alert("Please Enter correct value");
       return false;
       }

       addTranscation({
         amount:Number(newAmount),
         desc: newDesc
       });

       setDesc('');
       setAmount(0)
    }

    const getIncome = ()=>{
      let income = 0;
      for (var i =0; i < transcations.length; i++){
        if(transcations[i].amount > 0)
          income = income + transcations[i].amount
      }
      return income;
    }
    const getExpense = ()=>{
      let expense = 0;
      for (var i =0; i < transcations.length; i++){
        if(transcations[i].amount > 0)
          expense += transcations[i].amount
      }
      return expense;
    }

  return (
           
    <div className="container">
         <h1 className="text-center">Expense Tracker</h1>

         <h3>Your balance <br/> ${getIncome() + getExpense()}</h3>

         <div className="expense-container">
         <h3>INCOME <br/> ${getIncome()}</h3>
         <h3>EXPENSE <br/> ${getExpense()}</h3>
        
         </div>

         <h3>History</h3>
         <hr/>

<ul className="transction-list">
{transcations.map((transObj, ind)=>{
  return(<li key={ind}>
    <span>${transObj.desc}</span>
    <span>${transObj.amount}</span>
    </li>)
})}
</ul>
         <h3>Add new transcation</h3>
         <hr/>

         <form className="transcation-form" onSubmit={handleAddition}>
           <label>
              Enter Description <br/>
              <input type="text" 
              value={newDesc}
              placeholder="Description"
              onChange={(ev)=>setDesc(ev.target.value)} required/>
           </label>
<br/>
           <label>
            Enter Amount <br/>
           <input type="number" 
             value={newAmount}
           placeholder="Amount"
           onChange={(ev)=>setAmount(ev.target.value)} required/>
        </label>
<br/>
        <input type="submit" value="Add Transcation"/>
         </form>
    </div>
    );
}

export default Child;
