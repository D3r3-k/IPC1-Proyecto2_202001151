import React, { Component } from 'react';

class PokeData extends Component {

    cerrarInfo() {
        document.getElementById('pokeinfo').style.display = "none";
        document.getElementById('back').removeAttribute('class')
    }

    render() {
        return (
            <div className='pokeDataContainer' id='pokeData'>
                <div className='close'>
                    <i className='closeIcon' onClick={() => this.cerrarInfo()}>X</i>
                </div>
                <div className='dataImg'>
                    <span className='title'>Info</span>
                    <img src={this.props.data.img} alt="pokeimg" />
                    <hr />
                    <div className='dataElements'>
                        <span className='dataType'>{this.props.data.type}</span>
                        <span className='dataDebil'>{this.props.data.debility}</span>
                    </div>
                </div>

                <div className='dataPokemon'>
                    <div className='pokebar'>
                        <div className='titlelvl'>
                            <span className='title'>{this.props.data.name}</span>
                            <span className='id'>{this.props.data.id}</span>
                            <span className='lvl'>Nivel. {this.props.data.lvl}</span>
                        </div>
                        <hr />
                        <div className='xp'>
                            <span className='left'>0</span>
                            <span className='right'>100</span>
                            <progress value={this.props.data.xp} max="100" />
                        </div>
                    </div>
                    <hr />
                    <span className='title'>Ataques</span>
                    <hr />
                    <div className='attacks'>
                        <span>{this.props.attacks.atk1}</span>
                        <span>{this.props.attacks.atk2}</span>
                        <span>{this.props.attacks.atk3}</span>
                        <span>{this.props.attacks.atk4}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default PokeData;