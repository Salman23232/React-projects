import React, { useRef } from 'react'

const FocusInput = () => {
    const ref = useRef(null)
    const focusInputHandler = () =>{
        ref.current.focus()
    }
  return (
    <div>
        <input type="text" ref={ref} />
        <button onClick={focusInputHandler}>Focus</button>
    </div>
  )
}

export default FocusInput