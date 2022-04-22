import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import PokeCard from '../components/pokecard';
import PokeData from '../components/pokedata';

const cookie = new Cookies();
const avatar = ['https://i.imgur.com/nmh63eW.png', 'https://i.imgur.com/wGuYSi0.png'];
const url = "http://localhost:5000/api/pokemons/";
const error = {
    id: "XXX",
    name: "404",
    type: "NotFound",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",
    debility: "404",
    lvl: "1",
    xp: "3",
    attacks: {
        atk1: "Not Found",
        atk2: "Not Found",
        atk3: "Not Found",
        atk4: "Not Found"
    }
}
class Dashboard extends Component {
    constructor(pros) {
        super(pros);
        this.state = {
            pokemons: [],
            pokedata: [],
            attacks: {},
            searchPoke: ""
        }
    }

    getPokedata = (pokedata) => {
        this.setState({ pokedata: pokedata })
    }
    getAttacks = (attacks) => {
        this.setState({ attacks: attacks })
    }

    componentDidMount() {
        document.getElementById('body').classList.remove('body')
        document.getElementById('pokesearch').setAttribute('pokeby', 'pokename')
        document.getElementById('typeall').setAttribute('checked', 'true')
        const type = document.getElementById('typeall').getAttribute('checked')

        if (!cookie.get('user')) {
            window.location.replace('/')
        }

        if (!(this.state.pokemons.length > 0) && !(type === true)) {
            axios.get(url)
                .then(res => {
                    const pokemon = res.data;
                    this.setState({ pokemons: pokemon })
                }).catch(error => {
                    console.log(error);
                })
        }
    }

    handleChange = async e => {
        this.setState({ searchPoke: e.target.value })
    }

    handleSubmit = async e => {
        e.preventDefault()

        if (this.state.searchPoke.length > 0) {
            document.getElementById('pokeContainer').setAttribute('class', 'pokeContainer')
            this.setState({ pokemons: [] });

            const search = { search: this.state.searchPoke }
            const by = document.getElementById('pokesearch').getAttribute('pokeby')

            if (by === 'pokename') {
                await axios.get(url + "name/" + search.search)
                    .then(res => {
                        const pokemon = res.data;
                        this.setState({ pokemons: [pokemon] })
                    }).catch(err => {
                        this.setState({ pokemons: [error] })
                    })
            } else if (by === 'pokeid') {
                await axios.get(url + "id/" + search.search)
                    .then(res => {
                        const pokemon = res.data;
                        this.setState({ pokemons: [pokemon] })
                    }).catch(err => {
                        this.setState({ pokemons: [error] })
                    })
            }
        } else {
            alert('Escribe el Nombre o el ID de un Pokemon')
        }
    }

    cerrarSesion = () => {
        cookie.remove('id', { path: '/' })
        cookie.remove('name', { path: '/' })
        cookie.remove('user', { path: '/' })
        cookie.remove('gender', { path: '/' })
        cookie.remove('lvl', { path: '/' })
        window.location.replace('/')
    }

    genero() {
        if (cookie.get('gender') === 'hombre') {
            return avatar[1];
        } else if (cookie.get('gender') === 'mujer') {
            return avatar[0];
        }
    }

    valXpMax() {
        let lvl = Number(cookie.get('lvl'));
        let xpLvlReq = 100;

        if (lvl === 99) {
            xpLvlReq = 999999
            return xpLvlReq;
        } else {
            for (let i = 0; i < lvl; i++) {
                if (i) {
                    xpLvlReq += 35;
                }
            }
            return xpLvlReq;
        }
    }
    valXp() {
        let lvl = Number(cookie.get('lvl'));
        let xpLvlReq = this.valXpMax();
        let xpReturn = xpLvlReq;
        if (lvl >= 99) {
            xpLvlReq = 999999;
            return xpLvlReq
        } else {
            xpReturn = xpLvlReq * 0.7;
            return xpReturn
        }
    }

    resetFilter = async e => {
        document.getElementById('pokesearch').value = "";
        document.getElementById('opsearch').value = "name";
        document.getElementById('pokesearch').setAttribute('pokeby', 'pokename');
        document.getElementById('typeall').setAttribute('checked', 'true')
        document.getElementById('typeice').removeAttribute('checked')
        document.getElementById('typepsychic').removeAttribute('checked')
        document.getElementById('typeghost').removeAttribute('checked')
        document.getElementById('pokeContainer').setAttribute('class', 'pokeContainer')

        this.setState({ searchPoke: "", pokemons: [] })
        await axios.get(url)
            .then(res => {
                const pokemon = res.data;
                this.setState({ pokemons: pokemon })
            })
    }

    typeSelection = async (id) => {
        await this.setState({ pokemons: [] });
        const typeall = document.getElementById('typeall')
        const typeice = document.getElementById('typeice')
        const typepsychic = document.getElementById('typepsychic')
        const typeghost = document.getElementById('typeghost')

        if (id === typeall.getAttribute('id')) {
            typeall.setAttribute('checked', 'true')
            typeice.removeAttribute('checked')
            typepsychic.removeAttribute('checked')
            typeghost.removeAttribute('checked')

            document.getElementById('pokeContainer').setAttribute('class', 'pokeContainer')

            await axios.get(url)
                .then(res => {
                    const pokemon = res.data;
                    this.setState({ pokemons: pokemon })
                })

        } else if (id === typeice.getAttribute('id')) {
            typeall.removeAttribute('checked')
            typeice.setAttribute('checked', 'true')
            typepsychic.removeAttribute('checked')
            typeghost.removeAttribute('checked')

            document.getElementById('pokeContainer').setAttribute('class', 'pokeContainer backIce')

            await axios.get(url + "type/ice")
                .then(res => {
                    const pokemon = res.data;
                    this.setState({ pokemons: pokemon })
                })

        } else if (id === typepsychic.getAttribute('id')) {
            typeice.removeAttribute('checked')
            typeall.removeAttribute('checked')
            typepsychic.setAttribute('checked', 'true')
            typeghost.removeAttribute('checked')

            document.getElementById('pokeContainer').setAttribute('class', 'pokeContainer backPsychic')

            await axios.get(url + "type/psychic")
                .then(res => {
                    const pokemon = res.data;
                    this.setState({ pokemons: pokemon })
                })

        } else if (id === typeghost.getAttribute('id')) {
            typeice.removeAttribute('checked')
            typepsychic.removeAttribute('checked')
            typeall.removeAttribute('checked')
            typeghost.setAttribute('checked', 'true')

            document.getElementById('pokeContainer').setAttribute('class', 'pokeContainer backGhost')

            await axios.get(url + "type/ghost")
                .then(res => {
                    const pokemon = res.data;
                    this.setState({ pokemons: pokemon })
                })
        }
    }
    render() {
        return (
            <div id='back'>
                <main>
                    <header className="header">
                        <div className="logo">
                            P<i className="poke-ball-icon"></i>kedex
                        </div>
                        <nav>
                            <ul className="nav_links">
                                <li><a href="/dashboard">Inicio</a></li>
                                <li><a href='/logout' onClick={() => this.cerrarSesion()} className='logout'>Cerrar Sesion</a></li>
                            </ul>
                        </nav>
                    </header>
                    <section>
                        <div className='pokeSidebar'>
                            <div className='search'>
                                <div className='filterSearch'>
                                    <span className='title'>Buscador</span>
                                    <span className='reset' id='reset' onClick={
                                        this.resetFilter
                                    }>Reset</span>
                                </div>
                                <hr />
                                <form onSubmit={this.handleSubmit}>
                                    <div className='searchby'>
                                        <span className='subtitle'>Buscar por: </span>
                                        <select id="opsearch" onChange={
                                            async e => {
                                                if (e.target.value === 'name') {
                                                    await document.getElementById('pokesearch').setAttribute('pokeby', 'pokename')
                                                } else if (e.target.value === 'id') {
                                                    await document.getElementById('pokesearch').setAttribute('pokeby', 'pokeid')

                                                }
                                            }
                                        }>
                                            <option value="name">Nombre</option>
                                            <option value="id">ID</option>
                                        </select>
                                    </div>
                                    <input id='pokesearch' className='inputSearch' type="text" placeholder='Buscar...' name='search' onChange={this.handleChange}
                                    />
                                    <input className='submit' type="submit" value="Buscar" />
                                </form>
                            </div>
                            <div className='filter'>
                                <span className='title'>Filtro:</span>
                                <hr />
                                <span className='subtitle'>Tipos</span>
                                <div className='filter-item' onClick={
                                    () => { this.typeSelection("typeall") }
                                } >
                                    <input id='typeall' type="radio" />
                                    <span>Todos</span>
                                </div>
                                <div className='filter-item' onClick={
                                    () => { this.typeSelection("typeice") }
                                } >
                                    <input id='typeice' type="radio" />
                                    <span>Hielo</span>
                                </div>
                                <div className='filter-item' onClick={
                                    () => { this.typeSelection("typepsychic") }
                                } >
                                    <input id='typepsychic' type="radio" />
                                    <span>Psiquico</span>
                                </div>
                                <div className='filter-item' onClick={
                                    () => { this.typeSelection("typeghost") }
                                } >
                                    <input id='typeghost' type="radio" />
                                    <span>Fantasma</span>
                                </div>
                            </div>
                        </div>
                        <div className='pokeContainer' id='pokeContainer'>
                            {(
                                this.state.pokemons.map((key, i) => {
                                    if (this.state.pokemons.length > 0) {
                                        return (
                                            <PokeCard key={i} data={key} getData={this.getPokedata} getAttacks={this.getAttacks} />
                                        )
                                    } else {
                                        return null
                                    }
                                })

                            )}
                        </div>
                        <div className='pokeTrainer'>
                            <div className='trainerHeader'>
                                <i className='poke-ball-icon2'></i>
                                <span>{cookie.get('name')}</span>
                                <i className='poke-ball-icon2'></i>
                            </div>
                            <div className='pokeAvatar'>
                                <img src={this.genero()} alt={this.genero()} />
                            </div>
                            <div className='trainerFooter'>
                                <span>Nivel. {cookie.get('lvl')}</span>
                                <progress value={this.valXp()} max={this.valXpMax()} />
                            </div>
                        </div>
                    </section>
                </main>
                <div id='pokeinfo' className='pokeData'>
                    <PokeData key={0} data={this.state.pokedata} attacks={this.state.attacks} />
                </div>
            </div>
        )
    }
}


export default Dashboard;