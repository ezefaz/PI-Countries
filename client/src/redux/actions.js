import axios from 'axios'
import { RESET, ORDER_BY_POPULATION, FILTER_BY_ACTIVITIES, FILTER_BY_CONTINENT, GET_COUNTRIES, ORDER_BY_NAME, SEARCH_COUNTRIES, GET_ACTIVITIES, DETAIL } from '../Const/Const'

export function getCountries () {
    return async function (dispatch) {
        try {
            var json = await axios.get('http://localhost:3001/countries')
            return dispatch({
                type: GET_COUNTRIES,
                payload: json.data
            });
        } catch(err) {
            console.log(err)
        }
    }
}

export function getCountriesDetails(id) {
    return async function (dispatch) {
        try {
            var json = await axios (`http://localhost:3001/countries/${id}`)
                return dispatch({
                    type: DETAIL,
                    payload: json.data
                })
        } catch(err) {
            console.log('Wrong ID')
        }
    } 
}

export function searchCountries(name) {
    return async function (dispatch) {
        try {
            let json = await axios (`http://localhost:3001/countries?name=${name}`)
                return dispatch({
                    type: SEARCH_COUNTRIES,
                    payload: json.data
                })
        } catch(err) {
            alert('Country does not exist')
            console.log(err)
        }
    }
}

export function getContinents (payload) {
    return async function(dispatch) {
        try {
            return dispatch({
                type: FILTER_BY_CONTINENT,
                payload
            })
        } catch(err) {
            console.log(err)
        }
    }
}

export function getActivities() {
    return async function (dispatch) {
        try {
            let json = await axios('http://localhost:3001/activity')
            return dispatch({
                type: GET_ACTIVITIES,
                payload: json.data
            })
        } catch(err) {
            // alert('No activities available')
            console.log(err)
        }
    }
}

export function filterByActivities (payload) {
    return {
        type: FILTER_BY_ACTIVITIES,
        payload
    }
}

export function postActivities (payload) {
    return async function(dispatch){
        const activity = axios.post('http://localhost:3001/activity', payload)
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