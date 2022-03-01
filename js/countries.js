const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(resorce => resorce.json())
        .then(data => displayCountries(data));
}
loadCountries();
const displayCountries = counties => {
    // for (const country of countries) {
    //     console.log(country);
    // }
    const countriesDiv = document.getElementById('countries');
    counties.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name})">Details</button>
        `;
        countriesDiv.appendChild(div);
    });
}
const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`

}