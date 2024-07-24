import { useContext } from "react"
import { dataContext } from "../../context/AppContext"

const HomeScreen = () => {
  
  const {setFiles} = useContext(dataContext);

  function handleFileChange(e){
    setFiles(prev => [...prev, ...Array.from(e.target.files)])
    
  }

  return (
    <div className="homescreen-master-screen">
      <form className="input-container">
        <label htmlFor="fileInput">choseyu</label>
        <input type="file" name="fileInput" title=" " multiple accept=".pdf" onChange={handleFileChange}></input>

      </form>
      <div className="database-container">

      </div>
    </div>
  )
}

export default HomeScreen
