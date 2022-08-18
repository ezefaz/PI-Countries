import axios from 'axios';
import { RESET, ORDER_BY_POPULATION, FILTER_BY_ACTIVITIES, FILTER_BY_CONTINENT, GET_COUNTRIES, ORDER_BY_NAME, SEARCH_COUNTRIES, GET_ACTIVITIES, DETAIL, DELETE } from '../Const/Const';
import Swal from 'sweetalert2';


export function getCountries () {
    return async function (dispatch) {
        try {
            var json = await axios.get('/countries')
            return dispatch({type: GET_COUNTRIES, payload: json.data}) ;
        } catch(err) {
            console.log(err)
        }
    };
};

export function getCountriesDetails(id) {
    return async function (dispatch) {
        try {
            var json = await axios (`/countries/${id}`)
                return dispatch({type: DETAIL, payload: json.data})
        } catch(err) {
            console.log('Wrong ID')
        }
    } 
};

export function searchCountries(name) {
    return async function (dispatch) {
        try {
            let json = await axios (`/countries?name=${name}`)
                return dispatch({type: SEARCH_COUNTRIES, payload: json.data})
        } catch(err) {
           Swal.fire({
            text: 'Country not found',
            icon: "error",
            buttons: false,
            timer: '1500'
           })
           console.log(err);
        }
    }
};

export function getContinents (payload) {
    return async function(dispatch) {
        try {
            return dispatch({type: FILTER_BY_CONTINENT, payload})
        } catch(err) {
            console.log(err)
        }
    }
};

export function getActivities() {
    return async function (dispatch) {
        try {
            let json = await axios('/activity')
            return dispatch({type: GET_ACTIVITIES, payload: json.data})
        } catch(err) {
            console.log(err)
        }
    }
};

export const deleteActivity = (payload) => async (dispatch) => {
    return axios.delete(`/activity/delete/` + payload)
    .then(res => dispatch ({ type: DELETE }))

}

export function filterByActivities (payload) {
    return {
        type: FILTER_BY_ACTIVITIES,
        payload
    }
}

export function postActivities (payload) {
    return async function(dispatch){
        const activity = axios.post('/activity', payload)
        return activity
    }
}

export function orderByName(payload) {
    return {
        type: ORDER_BY_NAME,
        payload
    }
}
export function orderByPopulation (payload) {
    return {
        type: ORDER_BY_POPULATION,
        payload
    }
}

export function restartDetail() {
    return (dispatch) => {
        dispatch({
            type: RESET
        })
    }
}