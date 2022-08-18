const { Router } = require('express')
const router = Router();
const { Country } = require ('../db')
const { getDbInfo, getApiInfo } = require('../controller/controller')

router.get("/:id", async function (req, res) {
    const id = req.params.id.toUpperCase()
    const allCountries = await getDbInfo(); 
    
    if ( id ) {
        const idCountries = await allCountries.filter( e => e.id === id.toUpperCase() ) 
        idCountries.length?
        res.status(200).send(idCountries) :
        res.status(404).send('Set a valid ID')
    }
})

router.get("/", async function (req, res) {
    const { name } = req.query;

    let countries;

    const countryDB = await Country.count(); 
    countries = countryDB === 0 ?
    await getApiInfo() :
    await getDbInfo() 

    if ( name ) {
    const countryName = countries.filter(n => n.name.toLowerCase().includes(name.toLowerCase()));
    countryName.length ? 
    res.status(200).send(countryName) :
    res.status(404).send('No country been found')
    }  else {
    res.status(200).send(countries) 
    }
});

router.delete('/delete/:id', (req, res) => {
    try {
        let { id } = req.params;
        Country.destroy({ where: { id: id } });
        
        res.send('Country deleted successfully')
    } catch (error) {
        console.log(error);
    }
});

module.exports = router