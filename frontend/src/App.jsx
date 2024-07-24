import { useContext, useEffect } from "react";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import { dataContext } from "./context/AppContext";

const App = () => {
  

  //getting all required functions and variables from context
  const {files, sendFiles} = useContext(dataContext)

  //sending the files into the backend
  useEffect(()=>{
    files.length > 0 && sendFiles();
  },[files]);
  
  return (
    <div>
      <HomeScreen></HomeScreen>
    </div>
  )
}

export default App
