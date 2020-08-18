import React from 'react';


function MovieItem(props) {
    return (
        <div className="card-deck">
            <div className="card col-lg-4">
                <img src={props.Poster} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.Title}</h5>
                    <p className="card-text">{props.Year}</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    );
}

export default MovieItem;     