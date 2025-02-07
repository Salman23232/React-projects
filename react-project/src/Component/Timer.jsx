import React, { useEffect, useRef, useState } from 'react'


const Timer = () => {
    const ref = useRef(null)
    const [count, setCount] = useState(0)
    useEffect(() => {
        ref.current = setInterval(()=>{
            setCount((pre)=> pre + 1)
        },1000)

    return () =>{
        clearInterval(ref.current)
    }
    }, [])
  return (
   <div>
     <div>Timer: {count}</div>
     <button onClick={()=> clearInterval(ref.current)}>Stop</button>
   </div>
  )
}

export default Timer