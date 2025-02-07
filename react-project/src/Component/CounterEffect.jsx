import React, { useContext, useEffect, useState } from 'react'
import { data } from '../main'

const CounterEffect = () => {
  const context = useContext(data)
  const update = {...context, name: 'Ahmed'}
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = count
    }, [count])
  return (
    <div>
      <h1>{update.name}</h1>
        <h1>Count: {count}</h1>
        <button onClick={()=> setCount(count+1)}>Increment</button>
    </div>
  )
}

export default CounterEffect