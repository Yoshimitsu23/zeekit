import React, { Component } from 'react'
import { getApi } from '../apiService/getApi';
import PixaItem from './pixaItem';

class Pixa extends Component {
    state = { data_ar: [] };


    componentDidMount() {
        // let url = 'https://pixabay.com/api/?key=17225707-b510ba1298e0600d5936fd165';
        // getApi(url)
        //     .then(data)
    }

    render() {
        return (
            <div className='container'>
                test
                <PixaItem />
            </div>

        )
    }
}

export default Pixa;



// <CartoonItem item={item} key={item.mal_id}/>