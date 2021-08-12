const { Router } = require('express');
const { postVideogame } = require('../../controllers/videogames/post.videogames')

const router = Router();
   
module.exports = router;

router.post('/', async (req,res) => {  
    const { name,description,released,rating,platforms,genres } = req.body
    console.log(name,description,released,rating,platforms,genres)
    postVideogame({ name,description,released,rating,platforms,genres })
        .then(game =>{
            return res.status(202).json(game);   
        }).catch(err =>{
            return res.status(404).send(err.message)
        }) 
});