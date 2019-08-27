import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

let petsUrl = `/api/pets`

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      },
      filteredPets: [],
      adopted: [],
    }
  }

  componentDidMount() {
    fetch( petsUrl )
    .then( r => r.json() )
    .then( data =>
      this.setState({ pets: data, filteredPets: data })
    )
  }

  onChangeType =(data)=> {
    let filtered = []
    if (data === 'all')
      filtered = this.state.pets
    else
      filtered = this.state.pets.filter( pet => pet.type === data )
    this.setState({
      filters: {...this.state.filters, type: data},
      filteredPets: filtered
    })
  }

  adoptPet =(id)=> {
    if (!this.state.adopted.includes(id)) {
      let adopted = this.state.adopted
      adopted.push(id)
      this.setState({ adopted: adopted }, ()=>console.log(this.state.adopted))
    }
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters changeType={this.onChangeType} />
            </div>
            <div className="twelve wide column">
              <PetBrowser adoptPet={this.adoptPet} pets={this.state.filteredPets} adopted={this.state.adopted} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
