import ActressComponent from './ActressComponent'
import ActorComponent from './ActorComponent'
import { useState, useEffect } from 'react'

export default function AppMain() {

    const actress_api = "https://lanciweb.github.io/demo/api/actresses/"
    const actors_api = "https://lanciweb.github.io/demo/api/actors/"



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
            <div className="section actress">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                        {
                            renderActress.map((actress) => (
                                <ActressComponent key={actress.id} props={actress} />
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="section actors">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                        {
                            renderActor.map((actor) => (
                                <ActorComponent key={actor.id} props={actor} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>

    )
}