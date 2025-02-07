import React, { useReducer, useState } from 'react'

const CounterReducer = () => {
    const initialState = {count: 0}
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return {count: state.count + 1}
            case 'decrement':
                return {count: state.count - 1}
            case 'reset':
                return {count: 0}
            case 'incrementByAmount':
                return {count: state.count + action.payload}
            case 'decrementByAmount':
                return {count: state.count - action.payload}
        
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    const [inputValue, setInputValue] = useState(0)
    const IncrementHandler = () => {
        dispatch({type:'increment'})
    }
    const DecrementHandler = () => {
        dispatch({type:'decrement'})
    }
    const IncrementByAmountHandler = () => {
        dispatch({type:'incrementByAmount', payload:+inputValue})
        
    }
    const DecrementByAmountHandler = () => {
       dispatch({type:'decrementByAmount', payload:+inputValue})
        
    }
  return (
    <div>
        <h1>Count:{state.count}</h1>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={DecrementHandler}>Decrement</button>
        <button onClick={IncrementByAmountHandler}>Increment by Amount</button>
        <button onClick={DecrementByAmountHandler}>Decrement by Amount</button>
        <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
    </div>
  )
}

export default CounterReducer