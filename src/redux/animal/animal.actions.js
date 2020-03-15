import AnimalActionTypes from './animal.types';

export const selectAnimal = animal => ({
    type: AnimalActionTypes.SELECT_ANIMAL,
    payload: animal
});