import { createContext, useState } from "react"

export const dataContext = createContext();

// base url 
const baseURL = 'http://127.0.0.1:8000/'

// eslint-disable-next-line react/prop-types
export default function AppContext({children}){

    const [loading, setLoading] = useState(true)
    const [files, setFiles] = useState([]);


    

    //fuction that will send the files into the backend using post method
    const sendFiles = async()=>{
        try {
            //creating a formdata
            // const formdata = new FormData();

            //storing the files in the form data
            // files.forEach((file)=>{
            //     formdata.append('fileSet',file);
            // })

            const response = await fetch(`${baseURL}fileInput/`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify(files)
            })
            const result = await response.json();
            console.log(result);
            console.log(files)
        } catch (error) {
            console.log(error.message);
        }
    }

    
    const value = {
        loading, 
        setLoading,
        files,
        setFiles,
        baseURL,
        sendFiles
    }
    return <dataContext.Provider value={value}>
        {children}
    </dataContext.Provider>
}