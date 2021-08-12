const axios = require('axios')
const { Genre } = require('../../db')

var onlyNeedGenres = []
var aux

module.exports = {
    getGenres: async () =>{
        return await axios.get(`https://api.rawg.io/api/genres?key=${process.env.API_KEY}`)
        .then((genres) => {
            let arrAxios = genres.data.results

            for(var i = 0; i < arrAxios.length; i++){
                aux = {
                    name : arrAxios[i].name
                }
                onlyNeedGenres.push(aux)
            }
            return onlyNeedGenres
        })
    },
    getGenresdb: async () => {
        return await Genre.findAll()
        .then(genres => {
            return genres
        })
    }

}