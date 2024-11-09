export default function SelectedCountry({country}){
    return (
    <>
        <h1>{country.name.common}</h1>
        <div>capital {country.capital[0]}</div>
        <div>area {country.area}</div>
        <div>languages</div>
        <ul>{Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}</ul>
        <img src={country.flags.png} />
    </>
    )
}