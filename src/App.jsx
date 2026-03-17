import { useState, useEffect } from 'react'

const actress_api = "https://lanciweb.github.io/demo/api/actresses/"
const actors_api = "https://lanciweb.github.io/demo/api/actors/"


function App() {
  const [renderActress, setRenderActress] = useState([])
  
  function actressFunction() {
    fetch(actress_api)
      .then(res => res.json())
      .then(data => {
        setRenderActress(data)
        console.log(data);
      })

  }
  useEffect(actressFunction, [])

  const [renderActor, setRenderActor]=useState([])

  function actorsFunction(){
    fetch(actors_api)
    .then(res => res.json())
    .then(data => {
      setRenderActor(data)
      console.log(data);
      
    })
  }
  useEffect(actorsFunction,[])

  return (
    <>

    </>
  )
}

export default App
