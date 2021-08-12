const axios = require('axios')
const { Videogame, Genre } = require('../../db')

module.exports = {
    postVideogame: async(payload) => {
        return await  Videogame.findOrCreate({
            where:{
                name: payload.name
            },
            defaults:{
                description: payload.description,
                released: payload.released,
                rating: payload.rating,
                platforms: payload.platforms 
            }
        })
        .then(async(game) => {
            for(var i = 0; i < game.length; i++){
                return await Videogame.findByPk(game[i].dataValues.id)
                .then(async(saveGame) => {
                    for(var i = 0; i < payload.genres.length; i++){ 
                         await Genre.findOne({
                            where: {
                                name : payload.genres[i]
                            }
                        }).then((genre) => {
                            console.log("GENERO BUSCADO: ",genre)
                            genre.addVideogame(saveGame)
                        })
                    }
                })            
            }
          
        })
    }
}