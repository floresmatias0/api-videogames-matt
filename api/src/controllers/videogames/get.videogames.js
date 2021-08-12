const axios = require('axios')
const { Videogame,Genre } = require('../../db')
const Sequelize = require("sequelize");

var onlyNeed = []
var onlyNeedByName = []
var aux

module.exports = {
     getListGames: async () =>{

    return await axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&page_size=40`)
        .then(games =>{

            // let arrAxios = games.data.results
            // for(var i = 0; i < arrAxios.length; i++){
            //     let aux ={
            //         id: arrAxios[i].id,
            //         name : arrAxios[i].name,
            //         released: arrAxios[i].released,
            //         rating: arrAxios[i].rating,
            //         image: arrAxios[i].background_image,
            //         platforms: arrAxios[i].platforms.map(pointer => {
            //             return pointer.platform.name 
            //         })
            //     }
            //     onlyNeed.push(aux) 
            // }  
            // return onlyNeed
            return games.data

        }).then((payload) => {
            return payload
        })
    },

    getGameByName: async (name) =>{
       return await axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&search=${name}`)
        .then(games =>{
            let arrAxios = games.data.results
            if(arrAxios.length === 0){
                return "SORRY NOT FOUND GAME"
            }else{
                return games.data
            }
        }).then((payload) => {
            return payload
        })
    },

    getGameById: async (id) =>{
        return await axios.get(`https://api.rawg.io/api/games/${id}?key=${process.env.API_KEY}`)
        .then(games =>{
            aux = {
                name : games.data.name,
                released: games.data.released,
                description: games.data.description,
                rating: games.data.rating,
                image: games.data.background_image,
                platforms: games.data.platforms.map(pointer => {
                    return pointer.platform.name 
                }),
                genres: games.data.genres.map(pointer => {
                    return pointer.name
                })
            } 
            return aux
        }).then((payload) => {
            return payload
        })
    },

    getDataBase: async () =>{
        return await Videogame.findAll({
            include: [
                {
                    model: Genre,
                    as: "genres"
                }
            ]
        }) 
    },
    getGamesByGenre: async (genre) => {
        return await axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=${genre}&page_size=40`)
        .then(games => {
            return games
        })  
    },
    getDetails: async (name) => {
        return await axios.get(`https://api.rawg.io/api/games/${name}?key=${process.env.API_KEY}`)
        .then(game => {
            return game
        })
    }
};