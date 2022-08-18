import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import { postActivities, getCountries, getActivities } from '../../redux/actions'
import { WINTER, SUMMER, SPRING, AUTUMN } from '../../Const/Const';


import Nav from '../Nav/Nav';
import "./ActivityCreate.css"

function validate(input) {
    let errors = {}

    const nameRegular = /^[a-zA-ZÀ-ÿ\s]{4,40}$/
    const urlRegular = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png)/g

    if (!input.name) {
        errors.name = 'Name is required';

    } else if (!nameRegular.test(input.name)) {
        errors.name = 'Insert a valid name'; 

    } else if (!input.duration) {
        errors.duration = 'Complete this field';

    } else if (!input.season) {
        errors.season = 'Must select a season';

    } else if (!input.difficulty) {
        errors.difficulty = 'Select a difficulty';

    } else if (input.idCountry === []) {
        errors.idCountry = 'Must select a country';

    } else if (!urlRegular.test(input.image)) {
      errors.image = 'Invalid image format. Check image url must be PGN/JPG.';
    }
    return errors;
}

export default function ActivityCreate () {


    const dispatch = useDispatch()
    const history = useHistory()
    const countries = useSelector((state) => state.countries);
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({name: "", duration: "", season:"", difficulty:"", idCountry: [] })

    useEffect(() => {
        dispatch(getCountries())
        dispatch(getActivities())
    }, [dispatch])

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
        )
    }

    function handleDelete(i) {
        setInput({
            ...input,
            idCountry: input.idCountry.filter((e) => e !==i),
        })
    }

    function handleSelect(e) {
      if(Object.values(input.idCountry).includes(e.target.value)) {
        Swal.fire({ title: 'Country already selected', icon: 'error' })
      } else {
        setInput({
            ...input,
            idCountry: [...input.idCountry, e.target.value]
        })
    }
}

    function handleSubmit(e) {
        e.preventDefault()
        if (input.name === "" || input.duration === "" || input.season === "" || input.difficulty === "" ||
        input.idCountry.length === 0) return Swal.fire({ title: 'Must complete the fields', icon: 'error'})

        dispatch(postActivities(input))
        Swal.fire({ title: 'Activity created successfully!', icon: 'success' })
        setInput({
            name: "",
            duration: "",
            season: "",
            difficulty: "",
            idCountry: [],
        })
        history.push('/activities')
    }
    return (
      <div>
        <div>
          <Nav />
        </div>
      
          <div className="act-card-container">
            <div className="act-card">
              <div className="act-title">
          </div>  
              <form className="form-act" onSubmit={handleSubmit}>
                <span className='title-create-act'> Create an activity</span>
                <div className="input-act">
                  <label className='label-act'></label>
                  <input
                    className="i"
                    type="text"
                    placeholder="Enter the activity name..."
                    value={input.name}
                    name="name"
                    onChange={handleChange}
                  />
                  {errors.name && <p className="e">{errors.name}</p>}  
                </div>
                <div className="input-act">
                  <label></label>
                  <input
                    className="i"
                    type="text"
                    value={input.duration}
                    name="duration"
                    placeholder="Enter the duration..."
                    onChange={handleChange}
                  />
                  {errors.duration && <p className="e">{errors.duration}</p>}
                </div>
                <div className="input-act">
                  <label>Difficulty</label>
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
                    <option className='op'> Season </option>
                    <option className='op' value={WINTER}>Winter</option>
                    <option className='op' value={SUMMER}>Summer</option>
                    <option className='op' value={AUTUMN}>Autumn</option>
                    <option className='op' value={SPRING}>Spring</option>
                  </select>
                  {errors.season && <p className="e">{errors.season}</p>}
                </div>
                <label>Image:</label>
                <input className="i" autoComplete='off' type='text' name='image' placeholder='Insert URL here...' input={input.image} onChange={(e) => handleChange(e)} />
                {errors.image && <p className="e">{errors.image}</p>}

                {errors.idCountry && <p className="e">{errors.idCountry}</p>}
                <div>
                  <select
                  className="i"
                  onChange={(e) => handleSelect(e)}
                  >
                    Countries
                    {countries && countries.map(e => (
                     <option  classname='op' value={e.id} name="countries" key={e.id} >{e.name}</option>
                    ))}
                  </select>
                  
                </div>
    
                <div className="text-area">
                  {input.idCountry.map((country) => (
                    <div className='country-btn'>
                      <input className='btn-del' type='button' value='X' onClick={() => handleDelete(country)}/>
                      <p className='p-country'>{country}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <button className='btn-act' type="submit">Create Activity</button>
                </div>
              </form>
            </div>
          </div>
          </div>
          
      )
}