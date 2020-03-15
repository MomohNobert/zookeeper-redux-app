import { createSelector } from 'reselect';

const selectAnimal = state => state.animal;

export const selectCurrentAnimal = createSelector(
    [selectAnimal],
    (animal) => animal.animals
)