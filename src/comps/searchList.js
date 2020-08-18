import React, { useRef, useState } from 'react';
import '../style/searchBar.css'
import { getApi } from '../Services/getApiServ';
import MovieItem from './movieItem';


function Search(props) {
    const [ _ar, setAr ] = useState([]);
    let userSearch = useRef([]);

    const searchVal = () => {
        let searchVal = userSearch.current.value;
        console.log(searchVal);
        if (searchVal !== undefined) {
            searchMovies(searchVal);
        }
    }

    const searchMovies = (_val) => {
        let url = `http://www.omdbapi.com/?3896198&apikey=417e3d36&s=${_val}`;

        getApi(url)
            .then(data => {
                setAr(data.Search)
                console.log(_ar);

            })
    }

    return (
        <main className='container text-center d align-middle'>
            <div className="input-group mb-3" id='id_input'>
                <input onKeyUp={searchVal} ref={userSearch} type="text" className="form-control" placeholder="Search here. . ." />
                <div>
                    {/* {_ar.map(item => {
                        return <MovieItem key={item.imdbID} item={item} />
                    })} */}
                </div>
            </div>
        </main>
    );
}

export default Search;



