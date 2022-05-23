import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'redux'


function Home () {

    const dispatch = useDispatch()
    const countries = useSelector((state) => state.countriesApi)

    const stateLoading = useSelector((state) => state.loading)

    const [currentPage, setCurrentPage] = useState(1);
    return ( 
        <div>

        </div>
    )
}

export default Home