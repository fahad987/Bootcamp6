import React, { createContext, useReducer } from "react";
import TransactionReducer from './transReducer';


  const initialTranscations = [
    {amount: 100, desc: "Cash"},
    {amount: -50, desc: "Cold Drink"},
    {amount: 100, desc: "Deposit"},
    {amount: 200, desc: "Utilty Bills"},
  ]

 export const TranscationContext = createContext(initialTranscations);

 export const TransactionProvider = ({children})=>{
    let [state, dispatch] = useReducer(TransactionReducer, initialTranscations);
     
    function addTranscation(transObj){
     dispatch({
         type: "ADD_TRANSCATION",
         payload:{
             amount: transObj.amount, 
             desc: transObj.desc
         },
     })
    }

    return(
      <TranscationContext.Provider value={{
          transcations: state,
          addTranscation
      }}>
        {children}
      </TranscationContext.Provider>
    )
 }