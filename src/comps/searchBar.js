import React, { useEffect, useState, useRef } from 'react';
import '../style/searchBar.css'
import { getApi } from '../Services/getApiServ';



function SearchBar(props) {
    let userSearch = useRef(null);
    const [ _ar, setAr ] = useState([]);

    searchMovies = (_val) => {
        let url = `http://www.omdbapi.com/?s=${_val}&apikey=417e3d36`;
        getApi(url)
            .then(data => {
                setAr(data)
            })
    }

    return (
        <main className='container text-center d align-middle'>
            <div class="input-group mb-3" id='id_input'>
                <input onKeyUp={searchMovies} ref={userSearch} type="text" className="form-control" placeholder="Search here. . ." />
                <div class="input-group-append">
                    <button class="input-group-text text-info" >Click!</button>
                </div>
            </div>
        </main >
    );
}

export default SearchBar;