import React, { useRef, useState, useEffect } from 'react';
import '../style/searchBar.css'
import '../style/popup.css'
import { getApi } from '../Services/getApiServ';
import MovieItem from './movieItem';

function Search(props) {

    let [ _ar, setAr ] = useState([]);
    let [ _id, setId ] = useState([]);
    let [ movie, setMovie ] = useState([]);
    let [ _class, setClass ] = useState('d-none');
    let userSearch = useRef([]);

    useEffect(() => {
        document.getElementById("id_pop").className = _class;
    }, [ _class ]);

    useEffect(() => {
        let url = `http://www.omdbapi.com/?i=${_id}&apikey=3fbdc11&&flot=full`;
        getApi(url)
            .then(data => {
                setMovie(data);
                console.log(data);
            })
        //console.log(movie)
    }, [ _id ]);


    const searchMovies = () => {
        let searchVal = userSearch.current.value;
        let url = `http://www.omdbapi.com/?3896198&apikey=417e3d36&s=${searchVal}`;

        getApi(url)
            .then(data => {
                // console.log(_ar);
                setAr(data.Search)

            })
    }


    return (
        <div >
            <div id='id_pop' className='dark'>
                <div className='dark_inside'>
                    <img src={movie.Poster} />
                    <h2>{movie.Title}</h2>
                    <p>{movie.Plot}</p>
                </div>
                <button onClick={() => { setClass('d-none') }}>close</button>
            </div>
            <main className='container text-center'>
                <div>
                    <input onKeyUp={searchMovies} ref={userSearch} type="text" className="form-control" placeholder="Search here. . ." />
                    {_ar !== undefined ?
                        < div className='row'>
                            {
                                _ar.map(item => {
                                    return (<MovieItem setId={setId} setClass={setClass} key={item.imdbID} item={item} />)
                                })
                            }
                        </div> :
                        <h2>No match yet</h2>
                    }
                </div>
            </main >
        </div>

    );
}

export default Search;

// let url = `http://www.omdbapi.com/?i=${id}&apikey=3fbdc11&&flot=full`;
// getApi(url)
//     .then(data => {
//         setMovie(data);
//         console.log(movie);
//     })


