const { Router } = require('express');
const { getListGames,getGameByName,getGameById,getDataBase, getGamesByGenre,getDetails } = require('../../controllers/videogames/get.videogames')

const router = Router();

router.get('/', (req,res) => {  
    try{
      getListGames()
        .then((games) => {
            return res.status(202).json(games)
        })  
    }catch(err){
        return res.status(404).send(err)
    }  
});

router.get('/search', async (req,res) => {  
    const {name} = req.query

    try{
        getGameByName(name)
        .then((gamesByName) => {
            return res.status(202).json(gamesByName)
        })  
    }catch(err){
        return res.status(404).send(err)
    }  
});

router.get('/:id', async (req,res) => {  
    const {id} = req.params

    try{
        getGameById(id)
        .then((gameById) => {
            return res.status(202).json(gameById)
        })  
    }catch(err){
        return res.status(404).send(err)
    }  
});

router.get('/allGames/genres',(req,res) => {  
        getDataBase()
        .then((games) => {
            console.log("ROUTE: ",games)
            return res.status(202).json(games)
        }).catch((err) =>{
            console.log(err)
            return res.status(404).send(err)
        })  
});

router.post('/filter/feli/',(req,res) => {
    const { genre } = req.body
    console.log("BODY;",genre)

    getGamesByGenre(genre)
    .then((games) => {
        console.log(games.data)
        return res.status(202).json(games.data)
    }).catch((err) => {
        console.log(err)
        return res.status(404).send(err)
    })
})

router.get('/:name', (req,res) => {
    const {name} = req.params

    getDetails(name)
    .then((games) => {
        console.log(games.data)
        return res.status(202).json(games.data)
    }).catch((err) => {
        console.log(err)
        return res.status(404).send(err)
    })
})

module.exports = router;