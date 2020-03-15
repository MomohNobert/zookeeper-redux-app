import AnimalActionTypes from './animal.types';

const INITIAL_STATE =  {
    animals : [
        {species: 'ape', name: 'hans', gender: 'm', age: 23},
        {species: 'snake', name: 'banner', gender: 'm', age: 33},
        {species: 'fish', name: 'klaus', gender: 'f', age: 23},
        {species: 'cat', name: 'cho', gender: 'm', age: 6},
    ],
    selectedAnimal: []
}

const animalReducer = (state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case AnimalActionTypes.SELECT_ANIMAL:
            return {
                ...state,
                selectedAnimal: state.animals.filter(
                    animal => animal.name === action.payload.name
                )
            }


        default:
            return state;
    }
};

export default animalReducer;