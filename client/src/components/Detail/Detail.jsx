import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getCountriesDetails, restartDetail } from '../../redux/actions'
import NavBar from '../NavBar/NavBar'
import './Detail.css'

export default function Detail(props) {
const dispatch = useDispatch()
const params = useParams()
const countriesDetail = useSelector((state) => state.detail)

useEffect(() => {
  dispatch(getCountriesDetails(props.match.params.id)) 
  dispatch(restartDetail())
}, [dispatch, props.match.params.id])

return (
<div key={countriesDetail.id} className='detailE'>
  <div>
  <NavBar/>
  </div>
  
  <div className='detail-container'>{
      countriesDetail.length ?
          <div className='detail-content'>
              <img className='obj-image' src={countriesDetail[0].flag} alt=''/>
              <h1 className='obj-detail'>{countriesDetail[0].name}</h1>
              <div className='detail-obj'>
              <h2>ID: {countriesDetail[0].id}</h2>
              <h2>Capital: {countriesDetail[0].capital}</h2>
              <h2>Continent: {countriesDetail[0].continent}</h2>
              <h2>Subregion: {countriesDetail[0].subregion}</h2>
              <h2>Area: {countriesDetail[0].area} km2</h2>
              <h2>Poblation: {countriesDetail[0].population}</h2>
              </div>
              <div className='act-detail'>  {countriesDetail[0].activities?.map(el => {
                return(
                  <div>
                    <Link className='link-detail' to='/activities'>
                    <h2>Activity</h2>
                    </Link>
                    <div className='obj3Detail'>
                    <h3>{el.name}</h3>
                    <h3>Dificulty: {el.difficulty}</h3>
                    <h3>Duration: {el.duration}</h3>
                    <h3>Season: {el.season}</h3>
                  </div>
                </div>)})}
              </div>
                  <div className='btn2'>
     <Link className="link" to='/home'>
         <button className='btn2-back'>Back</button> 
     </Link>
            </div>
        </div> 
        : 
        <div>
          <p className='loading'>Loading...</p>
        </div>}
      </div>
  </div>);
};