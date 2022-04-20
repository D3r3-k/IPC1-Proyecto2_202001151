const { Router } = require("express");
const router = Router();

router.get('/', (req, res) => {
    res.send('Todo bien');
});

router.get('*', (req, res) => {
    res.status(404).send('404')
});
module.exports = router;