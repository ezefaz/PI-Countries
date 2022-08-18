const { Router } = require('express')
const router = Router();
const { Activity, Country } = require('../db.js');
const { getActivities } = require('../controller/controller')

router.post('/', async (req, res) => {
    const { name, difficulty, duration, season, idCountry,  } = req.body
    
    const createActivity = await Activity.create({ name, difficulty, duration, season, idCountry, })
    
    const countries = await Country.findAll({ where: { id: idCountry } })
    await createActivity.addCountries(countries)
    
    res.status(200).send('Activity created successfully')
});

router.get('/', async (req, res) => {
    const activities = await getActivities()
    res.status(200).send(activities)
});

router.delete('/', async (req, res) => {
    let { name } = req.query;
    
    try {
        await Activity.destroy({ where: { name : name } });

        res.status(200).send('Activity deleted successfully');
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;