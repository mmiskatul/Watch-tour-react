import { useEffect, useState } from 'react'
import './App.css'
import Watch from './Componenet/Watch/Watch'

function App() {
  const [watches,setWatches]=useState([]);
  // fatching data from local file 
  // useEffect(()=>{
  //   fetch('watches.json').then(res=>res.json()).then(data=>setWatches(data)); 
  // },[]);

  // fetchng Data from Githublink
  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/mmiskatul/Watches-data/refs/heads/main/watches.json').then(res=>res.json()).then(data=>setWatches(data));
  },[]);
  return (
    <>
     
      <h1>Vite + React</h1>
     {
      watches.map(watch=><Watch key={watch.id} watch={watch}/>)
     }
       
    </>
  )
}

export default App
