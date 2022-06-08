const { Router } = require('express')
const router = Router();
const { Activity, Country } = require('../db.js');
const { getActivities } = require('../controller/controller')

router.post('/', async (req, res) => {
    const { name, difficulty, duration, season, idCountry,  } = req.body
    const createActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
        idCountry,
    })
    const countries = await Country.findAll({
        where: {
            id: idCountry,
        }
    })
    createActivity.addCountries(countries)
    res.status(200).send(createActivity)

})

router.get('/', async (req, res) => {
    const activities = await getActivities()
    res.status(200).send(activities)
})

module.exports = router;