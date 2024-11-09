import { useEffect, useState } from 'react'
import axios from 'axios'
import Countries from './Countries'

function App() {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(()=>{
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(res => setCountries(res.data))
  },[])

  function updateSearch(event){
    setSearch(event.target.value)
    console.log(search)
  }

  return(
    <>
      <div>find country <input value={search} onChange={updateSearch}></input></div>
      <Countries countries={countries} searchCriteria={search} />
    </>
  )
}

export default App
