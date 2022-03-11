const { Router } = require('express');
const router = Router();


const personajes = require('../game.json');
console.log(personajes); 

router.get('/', (req, res) => {
    res.json('movies');
});

module.exports = router; 