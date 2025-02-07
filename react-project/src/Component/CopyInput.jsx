import React, { useState } from 'react'

const CopyInput = () => {
    const [value, setValue] = useState('')
    const [copied, setCopied] = useState(false)
    const submitHandler = (e) =>{
        e.preventDefault()
        navigator.clipboard.writeText(value).then(
            setTimeout(()=>{setValue('')
                setCopied(false)
            },1000)
            
        )
        setCopied(true)
    }
    const changeEventHandler = (e) =>{
        e.preventDefault()
        setValue(e.target.value)
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type="text" value={value} onChange={changeEventHandler}/>
            <button type='submit'>
                {copied? 'Copied': 'Copy'}
            </button>
        </form>
    </div>
  )
}

export default CopyInput