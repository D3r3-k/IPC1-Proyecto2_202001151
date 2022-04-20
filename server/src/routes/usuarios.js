const { Router } = require("express");
const router = Router();

const usuariosJson = require('../db/usuarios.json');

router.get('/', (req, res) => {
    res.json(usuariosJson);
});

router.get('/:user', (req, res) => {
    const user = usuariosJson.find(c => c.user === req.params.user);
    if (!user) return res.status(404).send('No se encontro el usuario')
    else res.json(user)
});

module.exports = router;