const { Router } = require("express");
const router = Router();

router.get('/', (req, res) => {
    res.send('Todo bien');
});

module.exports = router;