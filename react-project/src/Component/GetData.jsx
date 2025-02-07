import { useEffect, useState } from "react"


const GetData = () => {
    const [Data, setData] = useState([])
    useEffect(() => {
    async function fetchData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        console.log(data);
        if(data && data.length) {
            setData(data)
        }
    }
    fetchData()
    console.log(Data);
    
    }, [])
  return (
    <div>
        <div>
            {Data.map((d,i)=>{
                return <div key={i}>{d.title}</div>
            })}
        </div>
    </div>
  )
}

export default GetData