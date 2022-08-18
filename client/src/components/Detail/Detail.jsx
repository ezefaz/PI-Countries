import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { getCountriesDetails, restartDetail } from '../../redux/actions'
import Loading from '../Loading/Loading';
import Nav from '../Nav/Nav';
import './Detail.css'

export default function Detail(props) {
const dispatch = useDispatch()
const countriesDetail = useSelector((state) => state.detail)

useEffect(() => {
  dispatch(getCountriesDetails(props.match.params.id)) 
  dispatch(restartDetail())
}, [dispatch, props.match.params.id])

return (
<div key={countriesDetail.id} className='detailE'>
  <Nav/>
  <div className='detail-container'>{
      countriesDetail.length ?
          <div className='detail-content'>
              <img className='obj-image' src={countriesDetail[0].flag} alt=''/>
              <h1 className='obj-detail'>{countriesDetail[0].name}</h1>
              <div className='detail-obj'>
              <h2>ID: {countriesDetail[0].id}</h2>
              <h2>Capital: {countriesDetail[0].capital.replace(/[{}, "", -]/g,' ')}</h2>
              <h2>Continent: {countriesDetail[0].continent}</h2>
              <h2>Subregion: {countriesDetail[0].subregion}</h2>
              <h2>Area: {countriesDetail[0].area} km²</h2>
              <h2>Poblation: {countriesDetail[0].population}</h2>
              </div>
              <div className='act-detail'>  
              <h2>Activities</h2>
              {countriesDetail[0].activities?.length>0 ? 
              countriesDetail[0].activities.map(el =>
                  <div>
                    <Link className='link-detail' to='/activities'>
                    </Link>
                    <div className='obj3Detail'>
                    <img>{el.image}</img>
                    <h3>{el.name}</h3>
                    <h3>Dificulty: {el.difficulty}</h3>
                    <h3>Duration: {el.duration}</h3>
                    <h3>Season: {el.season}</h3>
                  </div>
                </div>)
                :  <div className='Activities__null'>
                <h3>
                there is no designated activity for this country
                </h3>
                <p>do you want to create one?</p>
                <Link to="/activity">
                  <button className='button85'>
                   Create New activity
                  </button>
                </Link>
              </div>
              }
              </div>
      <div className='btn2'>
        <Link className="link" to='/home'>
         <button className='button85'>Back</button> 
        </Link>
      </div>
    </div> 
        : 
        <Loading />
        }
  </div>
</div>
  );
};