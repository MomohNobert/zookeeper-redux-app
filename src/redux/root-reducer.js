import { combineReducers } from 'redux';

import animalReducer from './animal/animal.reducer';

const rootReducer = combineReducers({
    animal: animalReducer
})

export default rootReducer;