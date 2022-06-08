import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchCountries } from '../../redux/actions'
import './SearchBar.css'

export default function SearchBar () {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()

    function onSubmit(e) {
        e.preventDefault()
        if (search.length === 0) return alert('Insert a country')
        dispatch(searchCountries(search))
        setSearch('')
    }

    function onInputChange(e) {
        e.preventDefault()
        setSearch(e.target.value)
    }
    
    return (
        <div className='form-sb'>
            <form onSubmit={onSubmit}>
                <input className='input-country' type='text' placeholder='Insert country...' onChange={onInputChange} value={search} />
                <button className='input-btn' type='submit' value='' />
            </form>
        </div>
    )

}