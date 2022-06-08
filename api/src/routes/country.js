const { Router } = require('express')
const router = Router();
const { Country } = require ('../db')
const { getDbInfo, getApiInfo } = require('../controller/controller')

// estoy usando Async await porque no sabemos cuanto puede tardar la respuesta, entonces debo avisar que se tiene que esperar 
// a la respuesta antes de agregar informacion a la variable API, que es la base de datos.

router.get("/:id", async function (req, res) {
    const id = req.params.id.toUpperCase()
    const allCountries = await getDbInfo(); // me traigo la funcion que me trae todos los datos de la BD
    if ( id ) {
        const idCountries = await allCountries.filter( e => e.id === id.toUpperCase() )  // dentro de todos los personajes, quiero que me filtre el ID que le estoy pasando.
        idCountries.length?
        res.status(200).send(idCountries) :
        res.status(404).send('Set a valid ID')
    }
})


// router.get("/:id", function (req, res) {
//     const id = req.params.id

//     // getDbInfo()
//     // .then(allCountries => {
//     //     if( id ){
//     //         Country.findByPk(id.toUpperCase())
//     //         .then(idCountry => {
//     //             if( idCountry ) res.send( idCountry )
//     //             else throw new Error(message="Country not found")
//     //         })
//     //     }
//     //     else throw new Error(message="ID required")
//     //   })
//          if( id ){
//         let idCountry = Country.findOne({
//           where: id = id
//          },
//           includes: {
//              model: Activity,
//              attributes: ['name', 'difficulty', 'duration', 'season'],
//              through: {
//                  attributes: []
//                  }
//               })
//             .then(idCountry => {
//                  if(idCountry) res.send(idCountry)
//             else {
//                 getapi()
//                 .then(apiCountries =>
//                     let country = apiCountries.filter(e => e.id === id)
    //                 if(country)res.send(country)
    //                 else res.stastus(404).send("Country not found")
    //                 )
    //          }
    //     })
    //     .catch(error => res.stastus(404).send(error))
    // }
    // res.stastus(404).send("ID required")

    router.get("/", async function (req, res) {
        const { name } = req.query;
        let countries;
        const countryDB = await Country.count(); 
        countries = countryDB === 0 ?
        await getApiInfo() :
        await getDbInfo() 
    if ( name ) {
        const countryName = countries.filter(n => n.name.toLowerCase().includes(name.toLowerCase())); // siempre va a comparar los valores en minuscula, sino la busqueda que se realice puede ser erronea
        countryName.length ? 
        res.status(200).send(countryName) :
        res.status(404).send('No country been found')
    }  else {
       res.status(200).send(countries)  // si no hay ningun query, le mando todos los paises.
    }
    })

module.exports = router