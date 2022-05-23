const axios = require('axios')
const Router = require('express');
const server = require('express').Router()
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getApiInfo = async () => {
    const { data } = await axios('https://restcountries.com/v3/all')
    const api = await data.map(country => {
        return {
            id: country.cca3,
            name: country.name.common,
            flag: country.flag[0],
            continent: country.continents[0],
            capital: country.capital?.[0],
            area: country.area,
            population: country.population
        }
    });
    const result = await Country.bulkCreate(api)
    return result;
}



// const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
