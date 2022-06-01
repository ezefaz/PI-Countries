import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { postActivities, getActivities } from '../../redux/actions'
import { WINTER, SUMMER, SPRING, AUTUMN } from '../../Const/Const'
import NavBar from '../NavBar/NavBar'
import "./ActivityCreate.css"

function validate(input) {
    let errors = {}
    if (!input.name) {
        errors.name = 'Complete this field'
    } else if (!input.duration) {
        errors.duration = 'Complete this field'
    } else if (!input.season) {
        errors.season = 'Select a season'
    } else if (!input.difficulty) {
        errors.difficulty = 'Select a difficulty'
    } else if (input.idCountry === []) {
        errors.idCountry = 'Must select a country'
    }
    return errors;
}

export default function ActivityCreate () {
    const dispatch = useDispatch()
    const history = useHistory()
    const countries = useSelector((state) => state.allCountries)
    const [errors, setErrors] = useState({})

    const [input, setInput] = useState({
        name: "",
        duration: "",
        season:"",
        difficulty:"",
        idCountry: []
    })

    useEffect(() => {
        dispatch(getActivities())
    }, [dispatch])

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value
            })
        )
    }
    function handleDelete(i) {
        setInput({
            ...input,
            idCountry: input.idCountry.filter((e) => e !==i)
        })
    }
    function handleSelect(e) {
        setInput({
            ...input,
            idCountry: [...input.idCountry, e.target.value]
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (input.name === "" || input.duration === "" || input.season === "" || input.difficulty === "" ||
        input.idCountry.length === 0) return alert('Must complete the fields')

        dispatch(postActivities(input))
        alert('Activity created')
        setInput({
            name: "",
            duration: "",
            season: "",
            difficulty: "",
            idCountry: [],
        })
        history.push('/home')
    }
    return (
        <div className="">
          <div>
            <NavBar />
          </div>
    
          <div className="activityCardContainer">
            <div className="activityCard">
              <div className="activityTitle">
              </div>  
    
              <form className="formActivity" onSubmit={handleSubmit}>
                <span className='titleCreateActivity'> Crea una Actividad </span>
                <div className="inputActivities">
                  <label className='labelActivity'></label>
                  <input
                    className="i"
                    type="text"
                    placeholder="Coloque la Actividad..."
                    value={input.name}
                    name="name"
                    onChange={handleChange}
                  />
                  {errors.name && <p className="e">{errors.name}</p>}
                </div>
                <div className="inputActivities">
                  <label></label>
                  <input
                    className="i"
                    type="text"
                    value={input.duration}
                    name="duration"
                    placeholder="Coloque la Duracion..."
                    onChange={handleChange}
                  />
                  {errors.duration && <p className="e">{errors.duration}</p>}
                </div>
                <div className="inputActivities">
                  <label> Dificultad </label>
                  <input
                    className="i"
                    type="range"
                    name="difficulty"
                    min="1"
                    max="5"
                    value={input.difficulty}
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.difficulty && <p className="e"> {errors.difficulty}</p>}
                </div>
                <div className="seasonInput">
                  <select
                    className="i"
                    name="season"
                    value={input.season}
                    onChange={(e) => handleChange(e)}
                  >
                    <option className='op' > Temporada </option>
                    <option className='op' value={WINTER}>Invierno</option>
                    <option className='op' value={SUMMER}>Verano</option>
                    <option className='op' value={AUTUMN}>Otoño</option>
                    <option className='op' value={SPRING}>Primavera</option>
                  </select>
                  {errors.season && <p className="e">{errors.season}</p>}
                </div>
                {errors.countryId && <p className="e">{errors.countryId}</p>}
    
                <div>
                  <select  className="i" onChange={(e) => handleSelect(e)}>
                    <option className='op' > Paises </option>
                    {countries.map((v) => (
                      <option className='op' value={v.id}>{v.name}</option>
                    ))}
                  </select>
                </div>
    
                <div className="textArea">
                  {input.countryId.map((country) => (
                    <div className='countrieAndButton'>
                      <input className='btnDelete' type='button' value='X' onClick={() => handleDelete(country)}/>
                      <p className='pOfCountry'>{country}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <button className='btnActivity' type="submit">Crear Actividad</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )
}