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
              renderActress.map((actress,key) => (
                <div key={actress.id} className="col p-2">
                  <div id='card_female' className="card">
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
             {
              renderActor.map((actor,key) => (
                <div key={actor.id} className="col p-2">
                  <div id='card_male' className="card">
                    <img src={actor.image} alt="" />
                    <div className="card-body">
                      <h4>{actor.name}</h4>
                      <div><span>Birth Year: {actor.birth_year}</span></div>
                      <div><span>Nationality: {actor.nationality}</span></div>
                      <div><span>Biography: {actor.biography}</span></div>
                      <div><span>Awards: {actor.awards}</span></div>
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
