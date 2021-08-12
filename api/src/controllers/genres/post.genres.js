const axios = require('axios')
const { Genre } = require('../../db')
const { getGenres } = require('../../controllers/genres/get.genres')

module.exports = {
    postGenres: async () =>{
       return await getGenres()
        .then(async(genres) => {
            console.log("GENRES: ", genres)
            for(var i = 0; i < genres.length; i++){
              await Genre.findOrCreate({
                    where: {
                        name: genres[i].name
                    }
                })
            } 

            return "GENRES CREATE SUCCESS"
        })  
    }
}