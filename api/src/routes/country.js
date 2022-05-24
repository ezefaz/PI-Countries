const axios = require('axios');
const { Router } = require('express')
const router = Router();
const { Country, Activity } = require ('../db')
const server = require('express').Router()

// estoy usando Async await porque no sabemos cuanto puede tardar la respuesta, entonces debo avisar que se tiene que esperar 
// a la respuesta antes de agregar informacion a la variable API, que es la base de datos.


const getApiInfo = async () => {
    const apiUrl = await axios.get('https://restcountries.com/v3/all')
    const apiInfo = await apiUrl.data.map(country => { 
        
        return {
           id: country.cca3,
           name: country.name.common,
           flag: country.flags[0],
           continent: country.continents[0],
           capital: country.capital, 
           subregion: country.subregion,
           area: country.area,
           population: country.population
        }
    });
    const result = await Country.bulkCreate(apiInfo)
    return result;
}
const getDbInfo = async() => { 
    return await Country.findAll({ //findAll lo utilizo para traer info de la base de datos.
        include: {
            model: Activity,
            attributes: ['name', 'difficulty', 'duration', 'season'],
            through: {
                attributes: []
            }
        }
    })
}
const ActInfo = async() => {
    return await Activity.findAll({
        include: Country
    })
}

server.get("/countries/:id", async function (req, res){
    const id = req.params.id.toUpperCase()
    const allCountries = await getDbInfo();
    if ( id ) {
        const idCountries = allCountries.filter( i => i.id === id )
        idCountries.length?
        res.status(200).send(idCountries) :
        res.status(404).send('Set a valid ID')
    }
})

server.get("/countries", async function (req, res){
    const { name } = req.query;
    let countries;
    const countryDB = await Country.count(); 
    countries = countryDB === 0 ?
    await getApiInfo() :
    await getDbInfo() 
if ( name ) {
    const byName = countries.filter(n => n.id.toLowerCase().includes(name.toLowerCase())); // siempre va a comparar los valores en minuscula, sino la busqueda que se realice puede ser erronea
    byName.length ? 
    res.status(200).send(byName) :
    res.status(404).send('No country been found')
}  else {
   res.status(200).send(countries)  // si no hay ningun query, le mando todos los paises.
}
})
server.post("/activity", async function (req,res){
    const {
        name,
        season,
        duration,
        difficulty, 
        idCountry
    } = req.body;

     try{
        const actCreated = await Activity.create({
            name,
            season,
            duration,
            difficulty,
        })

        if(idCountry){
         actCreated.addCountry(idCountry)
        }
        res.send(actCreated) 
        
    }
    catch(err){
        console.log(err)
    }
})

server.get('/activity', async function (req, res){
    const act = await ActInfo()
    console.log(act)
    res.status(200).send(act)
}) 
 
module.exports = server