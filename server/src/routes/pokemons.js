const { Router } = require("express");
const router = Router();

const pokemonsJson = require('../db/pokemons.json');
const error = {
    id: "XXX",
    name: "404",
    type: "NotFound",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png"
}

router.get('/', (req, res) => {
    if (!pokemonsJson) return res.status(404).json(error)
    else res.json(pokemonsJson)
});

router.get('/name/:name', (req, res) => {
    const pokemon = pokemonsJson.find(c => c.name.toLowerCase() === req.params.name.toLowerCase());
    if (!pokemon) return res.status(404).json(error)
    else res.json(pokemon)
});

router.get('/id/:id', (req, res) => {
    const pokemon = pokemonsJson.find(c => c.id === req.params.id);
    if (!pokemon) return res.status(404).json(error)
    else res.json(pokemon)
});

router.get('/type/:type', (req, res) => {
    let pokeTyps = []
    let i = 0
    pokemonsJson.forEach((key) => {
        if (req.params.type.toLowerCase() === key.type.toLowerCase()) {
            pokeTyps[i++] = key
        }
    })
    res.json(pokeTyps)
});

router.get('*', (req, res) => {
    res.status(404).json(error)
});

module.exports = router;