import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [name, setName] = useState({
        name: 'salman'
    })
    const updateUser = (newName) =>{
        setName({name:newName})
    }
    return <UserContext.Provider value={{name , updateUser}}>
        {children}
    </UserContext.Provider>
}
