const { Router } = require('express');
const { postGenres } = require('../../controllers/genres/post.genres')
const router = Router();

router.post('/', (req,res) => {  
    try{
        postGenres()
        .then(genres => {
            return res.status(202).json(genres)
        })
    }catch(err){
        return res.status(404).send(err)
    }
});

module.exports = router;