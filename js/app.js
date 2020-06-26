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
      for (let index = 0; index < 10; index++) {
        pintarInFoBanderas(banderas[index])
      }
    })
}

const layoutflag = function (info) {
  return `<section id="${info.name}" class="flag">
        <img src="${info.flag}" />
        <article>
          <h4>${info.name}</h4>
          <p>population: ${info.population}</p>
          <p>Region: ${info.region}</p>
          <p>Capital: ${info.capital}</p>
        </article>
      </section>`
}

const pintarInFoBanderas = function (info) {
  document.getElementById('flags').innerHTML += layoutflag(info)
  // eventClickFlagName(info.name)
}

//////////////////////////////////////////////////////////

const buscarPais = function () {
  
  const elBuscar = document.getElementById('btnBuscar')
  const name = document.getElementById('nameCountrie')
  elBuscar.addEventListener('click', () => {
    getCountrieByName(name.value)
  })
}

// const eventClickFlagName = function(name) {
//   document.getElementById(name).addEventListener('click', () => {
//     console.log('sdsadsad')
//   })
// }



buscarPais()
allCountries()



























