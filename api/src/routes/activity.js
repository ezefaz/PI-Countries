const { Router } = require('express')
const router = Router();
const { Activity } = require('../db.js');
const { getActivities } = require('../controller/controller')

router.post("/", async function (req, res){
    const {
        name,
        season,
        duration,
        difficulty, 
        idCountry
    } = req.body;
     try {
        const createActivity = await Activity.create ({
            name,
            season,
            duration,
            difficulty,
            idCountry,
        })

        if ( idCountry ) {
         createActivity.addCountry(idCountry) // el addCountry es un método de sequelize que nos trae de la tabla lo que le pasemos
         res.status(200).send(createActivity)
        }
        res.send(createActivity) 
        
    }
    catch(err){
        console.log(err)
    }
})

router.get('/', async function (req, res) {
    const activities = await getActivities()
    res.status(200).send(activities)
}) 
 
module.exports = router