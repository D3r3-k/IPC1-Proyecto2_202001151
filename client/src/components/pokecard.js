import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='pokeCard'>
        <div className='pokeHeader'>
          <span>{this.props.name}</span>
        </div>
        <div className='pokeImg'>
          <img className={this.props.type} src={this.props.img} alt='PokeImg' />
        </div>
        <div className='pokeElements'>
          <span className='pokeId'>#{this.props.id}</span>
          <span className={'pokeType ' + this.props.type}>{this.props.type}</span>
        </div>
        <i className='pokeball'></i>
      </div>
    );
  }
}

export default Header;