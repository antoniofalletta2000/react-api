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

  const [renderActor, setRenderActor] = useState([])

  function actorsFunction() {
    fetch(actors_api)
      .then(res => res.json())
      .then(data => {
        setRenderActor(data)
        console.log(data);

      })
  }
  useEffect(actorsFunction, [])

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            {
              renderActress.map((actress,id) => (
                <div key={actress.id} className="col">
                  <div className="card">
                    <img src={actress.image} alt="" />
                    <div className="card-body">
                      <h4>{actress.name}</h4>
                      <div><span>Birth Year: {actress.birth_year}</span></div>
                      <div><span>Nationality: {actress.nationality}</span></div>
                      <div><span>Biography: {actress.biography}</span></div>
                      <div><span>Awards: {actress.awards}</span></div>
                    </div>
                  </div>
                </div>
                
               ))
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default App
