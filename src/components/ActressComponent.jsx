export default function ActressComponent({ props }) {
    return (

        <div className="col p-2">
            <div id='card_female' className="card text-white d-flex align-items-center">
                <h4>{props.name}</h4>
                <div className=" gap-2 card-body d-flex flex-column justify-content-between align-items-center text-center">
                    
                        <img src={props.image} alt="" />
                        <div><span>{props.birth_year} {props.nationality}</span></div>
                        <div><span>{props.biography}</span></div>
                        <div className="fw-bold text-black">Known For:</div>
                        <span className="text-black">{props.most_famous_movies.join(", ")}</span>
                        <div className="fw-bold text-danger">Awards:</div>
                        <span className="text-danger">{props.awards.join(", ")}</span>
                    
                </div>
            </div>
        </div>
    )

}