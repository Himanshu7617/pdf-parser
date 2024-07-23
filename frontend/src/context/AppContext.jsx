import { createContext, useState } from "react"

export const dataContext = createContext();

// eslint-disable-next-line react/prop-types
export default function AppContext({children}){

    const [loading, setLoading] = useState(true)

    
    const value = {
        loading, 
        setLoading
    }
    return <dataContext.Provider value={value}>
        {children}
    </dataContext.Provider>
}