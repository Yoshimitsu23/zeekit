import React from 'react';
import Header from './comps/header';
import SearchBar from './comps/searchBar';
import MoviesList from './comps/moviesList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


function App(props) {
  return (
    <div>
      <Header />
      <SearchBar />
      {/* <MoviesList /> */}

    </div>
  );
}

export default App;
