import { FILTER_BY_ACTIVITIES, FILTER_BY_CONTINENT, GET_COUNTRIES, ORDER_BY_NAME, SEARCH_COUNTRIES, ASCENDENT, POST_ACTIVITIES, GET_ACTIVITIES, ORDER_BY_POPULATION, HIGHER_POPULATION, DETAIL, RESET } from '../ActionTypes/ActionTypes'

const initialState = {
    countries: [],
    allCountries: [],
    activities: [],
    detail: []
}

function rootReducer (state = initialState, action) {

    switch (action.type) {

        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
            case FILTER_BY_CONTINENT: 
            const everyCountry = state.allCountries
            const filterCont = action.payload === 'All' ?
            everyCountry: everyCountry.filter((c) => c.continent === action.payload)
            return {
                ...state,
                countries: filterCont
            }
            case FILTER_BY_ACTIVITIES:
                const countryActs = state.allCountries
                const filterAct = countryActs.filter((c) => { return c.activities.find((c) => { return c.name === action.payload})} )

                if (action.payload === 'todos') {
                    return {
                        ...state,
                        countries: filterAct
                    }
                }
                case POST_ACTIVITIES:
                    return {
                        ...state
                    }
                    case GET_ACTIVITIES: 
                    return {
                        ...state,
                        activities: action.payload
                    }
                    case DETAIL:
                        return {
                            ...state,
                            detailt: action.payload
                        }
                        case RESET: 
                        return {
                            ...state,
                            detail: []
                        }
                        case SEARCH_COUNTRIES:
                            return { 
                            ...state,
                            countries: action.payload 
                        }
                        case ORDER_BY_NAME: 
                        let orderByName = action.payload === ASCENDENTE ? state.countries.sort((a, b) => {
                            if (a.name < b.name) {
                                return -1;
                            }
                            if (a.name > b.name) {
                                return 1;
                            }
                            return 0;
                        }) : 
                        state.countries.sort((a, b) => {
                            if (a.name < b.name) {
                                return 1;
                            }
                            if (a.name > b.name) {
                                return -1;
                            }
                            return 0;
                        })
                        return {
                            ...state,
                            countries: orderByName
                        }
                        case ORDER_BY_POPULATION:
                            let orderByPop = action.payload === HIGHER_POPULATION ? state.countries.sort((a, b) => {
                                if (a.population < b.population) {
                                    return 1;
                                }
                                if (a.population > b.population) {
                                    return -1;
                                }
                            }) :
                            state.countries.sort((a, b) => {
                                if (a.population < b.population) {
                                    return -1;
                                }
                                if (a.population > b.population) {
                                    return 1;
                                }
                                return 0;
                            })
                            return {
                                ...state,
                                countries: orderByPop
                            }
                            default: 
                            return state;
    } 
}

export default rootReducer;