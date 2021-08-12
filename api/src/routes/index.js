const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getGames = require ('./videogames/get.videogames')
const postGames = require ('./videogames/post.videogames')
const putGames = require ('./videogames/put.videogames')
const deleteGames = require ('./videogames/delete.videogames')

const getGenres = require ('./genres/get.genres')
const postGenres = require ('./genres/post.genres')
const putGenres = require ('./genres/put.genres')
const deleteGenres = require ('./genres/delete.genres')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames',getGames) 
router.use('/videogames',postGames) 
router.use('/videogames',putGames) 
router.use('/videogames',deleteGames) 

router.use('/genres',getGenres) 
router.use('/genres',postGenres) 
router.use('/genres',putGenres) 
router.use('/genres',deleteGenres) 


module.exports = router;
