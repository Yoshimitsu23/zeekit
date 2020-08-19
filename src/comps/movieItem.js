import React, { useState } from 'react';
import { getApi } from '../Services/getApiServ';


function MovieItem(props) {

    let [ movie, setMovie ] = useState();
    //let [ pop, setPop ] = useState(false);

    let item = props.item;

    return (
        <div className="col-lg-6 border mt-2">
            <img src={item.Poster} className="w-25" />
            <div className="card-body">
                <h5 className="card-title">{item.Title}</h5>
                <p className="card-text">{item.Year}</p>
                <button onClick={() => { props.setClass('dark'); props.setId(item.imdbID) }}>info</button>
            </div>
        </div>

    );
}

export default MovieItem;     