const express = require("express");
const app = express();
const morgan = require('morgan');
const cors = require('cors');

// * OTHERS
app.set('port', process.env.PORT || 5000);
app.set('json spaces', 2);

// * CONFIGS
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


// * RUTES
app.use(require('./src/routes/index'));
app.use('/api/usuarios',require('./src/routes/usuarios'));
app.use('/api/pokemons',require('./src/routes/pokemons'));



// * START SERVER
app.listen(app.get('port'), () => {
    console.log(`Server on port: ${app.get('port')}`);
});