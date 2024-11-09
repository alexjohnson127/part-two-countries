import SelectedCountry from "./SelectedCountry"

export default function Countries({countries, searchCriteria}){
    let selectedCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchCriteria.toLowerCase()))
    console.log(selectedCountries)

    if(selectedCountries.length>10) {
        return <div>too many countries</div>
    }
    else if(countries.filter(country => country.name.common.toLowerCase().includes(searchCriteria.toLowerCase())).length === 1){
        return <SelectedCountry country={selectedCountries[0]}/>
    }
    else{   
        return(
            <>
                {countries.filter(country => country.name.common.toLowerCase().includes(searchCriteria.toLowerCase()))
                .map(country => <div>{country.name.common}</div>)}
            </>
            
        ) 
    }      
}