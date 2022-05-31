const { Router } = require('express')
const router = Router();
const { Activity, Country } = require('../db.js');
const { ActInfo } = require('../routes/country')

router.post("/", async function (req, res){
    const {
        name,
        season,
        duration,
        difficulty, 
        idCountry
    } = req.body;
     try {
        const actCreated = await Activity.create ({
            name,
            season,
            duration,
            difficulty,
        })

        if ( idCountry ) {
         actCreated.addCountry(idCountry) // el addCountry es un método de sequelize que nos trae de la tabla lo que le pasemos
        }
        res.send(actCreated) 
        
    }
    catch(err){
        console.log(err)
    }
})

router.get('/', async function (req, res){
    const act = await ActInfo()
    res.status(200).send(act)
}) 
 
module.exports = router