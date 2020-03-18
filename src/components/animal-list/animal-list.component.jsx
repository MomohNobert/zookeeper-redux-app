import React from 'react';
import { connect } from 'react-redux';

import { selectAnimal, fetchAnimals } from '../../redux/animal/animal.actions';

import { AnimalListStyle } from './animal-list.styles';

const AnimalList = ({ animals, selectAnimal, fetchAnimals }) => {

    return (    
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
            <button
                onClick={() => fetchAnimals(animals)}
            >
                Click me to fetch to server
            </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        animals: state.animal.animals,
        fetchedAnimals : state.animal.fetchedAnimals
    }
}

const mapDispatchToProps = dispatch => ({
    selectAnimal: animal => dispatch(selectAnimal(animal)),
    fetchAnimals: animals => dispatch(fetchAnimals(animals))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnimalList);