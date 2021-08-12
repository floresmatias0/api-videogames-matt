const { Router } = require('express');
const { getGenres,getGenresdb } = require('../../controllers/genres/get.genres');
const router = Router();

router.get('/', (req,res) => {  
    try{
        getGenres()
        .then((genres) => {
            return res.status(202).json(genres)
        })  
    }catch(err){
        return res.status(404).send(err)
    }  
});

router.get('/db', (req,res) => {  
    try{
        getGenresdb()
        .then((genres) => {
            return res.status(202).json(genres)
        })  
    }catch(err){
        return res.status(404).send(err)
    }  
});

module.exports = router;