const { request } = require('express');
const { Router } = require('express');
const router = Router();
const _ = require('underscore');

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
        const newPersonaje = { id, ...req.body };
        //console.log(newPersonaje);
        res.json(personajes);
        personajes.push(newPersonaje);
    } else {
        //res.send('Wrong request');
        res.status(500).json({ error: 'There was and error.' });
    }
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const { game, user, pjs } = req.body;
    if (game && user && pjs) {
        _.each(personajes,(personajes, i) => {
            if (personajes.id == id){
                //personajes.game = game;
                //personajes.user = user;
                personajes.pjs = pjs;
            }
        });
        res.json(personajes);
    }else{
        res.status(500).json({ error: 'There was and error.' });
    }
 });

router.delete('/:id', (req, res) => {
   const {id} = req.params;
//console.log(req.params);
_.each(personajes,(personajes, i)=>{
if (personajes.id == id) {
    personajes.splice(i, 1);
}
});
res.send(personajes);
});



module.exports = router; 