import React from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import { selectAnimal } from '../../redux/animal/animal.actions';
// import { selectCurrentAnimal } from '../../redux/animal/'


import { AnimalListStyle } from './animal-list.styles'

const AnimalList = ({ animals, selectAnimal }) => (
    <div>
        {
            animals.map(animal => (
                <AnimalListStyle 
                    key={animal.name}
                    onClick={() => selectAnimal(animal)}
                >
                    <p>Name : {animal.name}</p>
                </AnimalListStyle>
            )
            )
        }
    </div>
)

const mapStateToProps = state => {
    console.log(state)
    return {
        animals: state.animal.animals
    }
}

const mapDispatchToProps = dispatch => ({
    selectAnimal: animal => dispatch(selectAnimal(animal))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnimalList);