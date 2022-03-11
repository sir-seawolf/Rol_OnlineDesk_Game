const { request } = require('express');
const { Router } = require('express');
const router = Router();


const personajes = require('../game.json');
//console.log(personajes); 

router.get('/', (req, res) => {
    res.json(personajes);
});


router.post('/', (req, res) => {
    //res.json(personajes);
    //console.log(req.body);
    const { game, user, pjs } = req.body;
    if (game && user && pjs) {
        const id = personajes.length + 1;
        const newPersonaje = {...req.body, id}; 
        //console.log(newPersonaje);
        res.json(personajes);
        personajes.push(newPersonaje);
    }else{
        res.send('Wrong request');
    }
   
});



module.exports = router; 