// Esta es la url base de la api
const basePath = 'https://restcountries.eu/rest/v2/'

/**
 * Este metodo hace una peticion get al enpoint name
 *
 * @param {*} nameCountrie
 * @returns lista de countries
 */
const getCountrieByName = function(nameCountrie) {
  return fetch(`${basePath}name/${nameCountrie}`) 
    .then(function (response) {
      return response.json()
    })
    .then(function (banderas) {
      pintarInFoBanderas(banderas[0])
    })
}

const allCountries = function () {
  return fetch(`${basePath}all`)
    .then(function (response) {
      return response.json()
    })
    .then(function (banderas) {
      for (let index = 0; index < banderas.length; index++) {
        pintarInFoBanderas(banderas[index])
      }
    })
}

const layoutflag = function (info) {
  return `<section id="${info.name}" class="flag"  data-name="${info.name}">
        <img src="${info.flag}" />
        <article>
          <h4>${info.name}</h4>
          <p><span>Pulation:</span> ${info.population}</p>
          <p><span>Region:</span> ${info.region}</p>
          <p><span>Capital:</span> ${info.capital}</p>
        </article>
      </section>`
}

const pintarInFoBanderas = function (info) {
  document.getElementById('flags').insertAdjacentHTML('beforeend', layoutflag(info))  
  eventClickFlagName(info.name)
}

//////////////////////////////////////////////////////////

const buscarPais = function () {
  
  const elBuscar = document.getElementById('btnBuscar')
  const name = document.getElementById('nameCountrie')
  elBuscar.addEventListener('click', () => {
    getCountrieByName(name.value)
  })
}

const eventClickFlagName = function(name) {
  const element = document.getElementById(name)
   element.addEventListener('click', (event) => {
     if(event && event.currentTarget && event.currentTarget.id){
      getCountrieByName(event.currentTarget.id)
     }
   })
 }



buscarPais()
allCountries()



























