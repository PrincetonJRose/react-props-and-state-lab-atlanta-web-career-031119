import React from 'react'

class Pet extends React.Component {

  render() {
    let p = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {p.gender === 'male'? ' ♀ ':' ♂ '}
            {p.name}
          </a>
          <div className="meta">
            <span className="date">{p.type}</span>
          </div>
          <div className="description">
            <p>Age: {p.age}</p>
            <p>Weight: {p.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {
            this.props.adopted.includes(p.id)?
            <button className="ui enabled button">Already adopted</button>
            :
            <button className="ui disabled button">Already adopted</button>
          }
          <button className="ui primary button" onClick={() => this.props.adoptPet(p.id)}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
