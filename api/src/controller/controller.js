const { Country, Activity } = require('../db')
const axios = require('axios')


const getApiInfo = async () => {
    const apiUrl = await axios.get('https://restcountries.com/v3/all')
    const apiInfo = await apiUrl.data.map(country => ({ 
           id: country.cca3,
           name: country.name.common,
           flag: country.flags[0],
           continent: country.continents[0],
           capital: country.capital, 
           subregion: country.subregion,
           area: country.area,
           population: country.population,
           googleMaps: country.maps.googleMaps,
    }));
    const result = await Country.bulkCreate(apiInfo)
    return result;
};

const getDbInfo = async() => { 
    return await Country.findAll({
        include: {
            model: Activity,
            attributes: ['name', 'difficulty', 'duration', 'season'],
            through: {
                attributes: []
            }
        }
    })
};

const getActivities = async() => {
    return await Activity.findAll({ include: Country  })
};

module.exports = { getDbInfo, getApiInfo, getActivities}