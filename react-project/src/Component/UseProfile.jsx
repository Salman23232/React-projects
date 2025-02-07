import React, { createContext, useContext } from 'react'
import { UserContext } from './UseContext'

const UseProfile = () => {
    const {name, updateUser} = useContext(UserContext)
  return (
    <div>
        <div>
            {name.name}
        </div>
    </div>
  )
}

export default UseProfile