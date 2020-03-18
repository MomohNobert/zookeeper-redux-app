import axios from 'axios';

import AnimalActionTypes from './animal.types';

export const selectAnimal = animal => ({
    type: AnimalActionTypes.SELECT_ANIMAL,
    payload: animal
});

export const fetchAnimals = () => {
    // const url = 'http://localhost:3000/animals';
    // const request = axios.get(url)

    // return {
    //     type: AnimalActionTypes.FETCH_ANIMALS,
    //     payload: request
    // }
    return function(dispatch) {
        const url = 'http://localhost:3000/animals';
        const request = axios.get(url);

        request.then(response => {
            dispatch({
                type : AnimalActionTypes.FETCH_ANIMALS,
                payload : response.data
            })
        }).catch(error => console.log(error))
    }
}