const { Router } = require('express')
const router = Router();
const { Activity, Country } = require('../db.js');
const { getActivities } = require('../controller/controller')

router.post('/', async (req, res) => {
    const { name, difficulty, duration, season, idCountry, image  } = req.body
    
    const createActivity = await Activity.create({ name, difficulty, duration, season, image, idCountry, })
    
    const countries = await Country.findAll({ where: { id: idCountry } })
    await createActivity.addCountries(countries)
    
    res.status(200).send('Activity created successfully')
});

router.get('/', async (req, res) => {
    const activities = await getActivities()
    res.status(200).send(activities)
});

router.delete('/delete/:id', async (req, res) => {
   
    try {
        let id = req.params.id
        await Activity.destroy({ where: { id : id } });

        res.send('Activity deleted successfully');
    } catch (error) {
        res.send(error);
    }
});

router.put('/:id', async (req, res) => {
    const { name, difficulty, duration, season, country } = req.body;
    const editAct = await Activity.findAll();

    const id = req.params.id;
    if (!id || !name || !difficulty || !duration || !season || !country) {
        return res.status(404).json({message: `Activity not found`});
    }
    else{
        let findActivity = editAct.find(e => e.id === parseInt(id))

        if (findActivity){
            findActivity.name = name;
            findActivity.difficulty = difficulty;
            findActivity.season = season;
            findActivity.country = country;
            res.send(findActivity)
        }
        else {
            res.status(404).send("No Activity found")
        }
    }
})


module.exports = router;