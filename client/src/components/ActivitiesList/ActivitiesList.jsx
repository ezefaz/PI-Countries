import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'; 

import { deleteActivity } from '../../redux/actions';
import Activity from '../Activity/Activity';
import './ActivitiesList.css'
import Nav from '../Nav/Nav';
import Loading from '../Loading/Loading';



export default function ActivitiesList () {
    const dispatch = useDispatch();
    const history = useHistory();
    const activities = useSelector((state) => state.activities)
    const [loading, setloading] = useState(false);

    function handleDelete (e) {
        Swal.fire({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this activity!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            dispatch(deleteActivity(e))
            Swal.fire({ 
              title: "Activity Deleted Successfully", 
              icon: 'success',
              timer: "800"
            })
          }
          history.push('/home')
        })
      }


    useEffect( () => {
        setTimeout(() => {
            setloading(true)
        }, 1500)
    });

return (
  <div className='act-container'>
    <Nav />
  <div className='act-cards'> 
  {
    loading === false ? 
    <Loading /> : 

    activities.length>0 ? activities.map((ac) => 
      <div className='act-card-list' key={ac.id} id={ac.id}>
        <Activity 
          image={ac.image? ac.image : <p>No image available</p>}
          name={ac.name}
          duration={ac.duration}
          season={ac.season}
          difficulty={ac.difficulty} />
        <button onClick={()=> handleDelete(ac.id)} className='Activities_delete'>X</button>
        </div>) :
       <div className='activities-empty'>
          <h3>No activities been created</h3>
          <p>Do you want to create one?</p>
          <Link to='/activity'>
            <button className='noact-btn'> Create New Activity</button>
          </Link>
        </div>
    } 
      </div>
  </div>
)
}