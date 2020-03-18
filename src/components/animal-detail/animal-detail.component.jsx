import React from 'react';
import { connect } from 'react-redux';

import { AnimalListStyle } from '../animal-list/animal-list.styles';

const AnimalDetail = ({ selectedAnimal, fetchedAnimals }) => {
    return (
    <div>
        <div>
            {
                selectedAnimal.length ?
                selectedAnimal.map(animal => (
                    <div  key={animal.name}>
                        <p>Name : {animal.name}</p>
                        <p>Specie : {animal.species}</p>
                        <p>Age : {animal.age}</p>
                        <p>Sex : {animal.gender}</p>
                    </div>
                ))
                :
                <p>Bye</p>
            }
        </div>
        <div>
            {
                fetchedAnimals ?
                fetchedAnimals.map(animal => (
                    <AnimalListStyle 
                        key={animal.name}
                    >
                        <p>Name : {animal.name}</p>
                    </AnimalListStyle>
                )
                )
                :
                <p>Not Available</p>
            }
        </div>
    </div>
    
    )
}

const mapStateToProps = state => {
    return {
        selectedAnimal: state.animal.selectedAnimal,
        fetchedAnimals: state.animal.fetchedAnimals
    }
}

export default connect(mapStateToProps)(AnimalDetail);