import React, { Component } from 'react';
class PokeCard extends Component {
  mostrarInfo() {
    document.getElementById('pokeinfo').style.display = "block";
    document.getElementById('back').setAttribute('class', "back");

    this.props.getData(this.props.data)
    this.props.getAttacks(this.props.data.attacks)

    if (this.props.data.type === "Ice") {
      document.getElementById('pokeData').setAttribute('class', "pokeDataContainer backIce");
    } else if (this.props.data.type === "Psychic") {
      document.getElementById('pokeData').setAttribute('class', "pokeDataContainer backPsychic");
    } else if (this.props.data.type === "Ghost") {
      document.getElementById('pokeData').setAttribute('class', "pokeDataContainer backGhost");
    } else {
      document.getElementById('pokeData').setAttribute('class', "pokeDataContainer");
    }
  }

  render() {
    return (
      <div className='pokeCard' onClick={() => this.mostrarInfo()}>
        <div className='pokeHeader'>
          <span>{this.props.data.name}</span>
        </div>
        <div className='pokeImg'>
          <img className={this.props.data.type + " hola"} src={this.props.data.img} alt='PokeImg' />
        </div>
        <div className='pokeElements'>
          <span className='pokeId'>#{this.props.data.id}</span>
          <span className={'pokeType ' + this.props.data.type}>{this.props.data.type}</span>
        </div>
        <i className='pokeball'></i>
      </div>
    );
  }
}

export default PokeCard;