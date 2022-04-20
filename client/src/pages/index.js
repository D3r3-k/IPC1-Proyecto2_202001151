import React, { Component } from 'react';
import axios from "axios";
import Cookies from 'universal-cookie';

import img from '../img/pokemon.png';

const url = 'http://localhost:5000/api/usuarios/';
const cookie = new Cookies();

class Index extends Component {
    state = {
        form: {
            user: '',
            pass: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion = async () => {
        const user = this.state.form.user;
        const pass = this.state.form.pass;

        if (user.length > 0 && pass.length > 0) {
           await axios.get(url)
                .then(data => {
                    return data
                })
                .then(res => {
                    const data = []
                    res.data.map((key) => {
                        if ((key.user === user) && (key.password === pass)) {
                            data[0] = key.id
                            data[1] = key.name
                            data[2] = key.user
                            data[3] = key.password
                            data[4] = key.gender
                            data[5] = key.lvl
                            return data
                        } else {
                            return null
                        }
                    })
                    if ((data[2] === user) && (data[3] === pass)) {
                        cookie.set('id', data[0], { path: '/' })
                        cookie.set('name', data[1], { path: '/' })
                        cookie.set('user', data[2], { path: '/' })
                        cookie.set('gender', data[4], { path: '/' })
                        cookie.set('lvl', data[5], { path: '/' })
                        window.location.replace("./dashboard");
                    } else {
                        alert('Usuario o contraseña incorrectos')
                    }
                }).catch(err => {
                    console.log(err)
                })
        }

    }

    componentDidMount() {
        const light = document.getElementById('light');
        const grid = document.getElementById('hex-grid');

        grid.addEventListener("mousemove", function (e) {
            light.style.left = `${e.clientX}px`;
            light.style.top = `${e.clientY}px`;
        });

        if (cookie.get('user')) {
            window.location.replace('/dashboard')
        }
    }

    render() {
        return (
            <div className='backContainer'>
                <div id='hex-grid'>
                    <div id='light' className='light'></div>
                    <div className='grid'></div>
                </div>
                <div className="container">
                    <div className='content-left'>
                        <img src={img} draggable='false' alt='bg Pokemon' />
                    </div>
                    <div className='content-right'>
                        <form className='form' onSubmit={this.handleSubmit}>
                            <h1>Iniciar Sesion</h1>
                            <div className='line' />
                            <label>Usuario: </label>

                            <input
                                id='user'
                                name='user'
                                type='text'
                                placeholder='Usuario'
                                onChange={this.handleChange}
                                required />

                            <label>Contraseña: </label>

                            <input
                                id='pass'
                                name='pass'
                                type='password'
                                placeholder='Contraseña'
                                onChange={this.handleChange}
                                required />

                            <button onClick={this.iniciarSesion} className='btn'>Iniciar Sesion</button>
                            <p>Inicia Sesion para ver tu Pokedex.</p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index;