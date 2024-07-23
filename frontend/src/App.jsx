import { useEffect } from "react"

const App = () => {
  const baseurl = 'http://127.0.0.1:8000/';

  const fetchdata = async () => {
    const response = await fetch(`${baseurl}home/`);
    const result = await response.json();
    console.log(result);
  }

  useEffect(() => {
    fetchdata()


  }, [baseurl])
  return (
    <div>
      pdf parser
    </div>
  )
}

export default App
