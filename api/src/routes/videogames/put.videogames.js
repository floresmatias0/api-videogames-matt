const { Router } = require('express');
const axios = require('axios')
const { Videogame } = require('../../db')
const router = Router();
   
module.exports = router;

router.get('/', async (req,res) => {  
        await Pokemon.findAll()
        .then(pokemons =>{
            return res.status(202).json(pokemons);   
        }).catch(err =>{
            return res.status(404).send(err.message)
        }) 
});