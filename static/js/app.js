import ApiFlag from './api.js'
const api = new ApiFlag()

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
  // se debe modificar esta funcion para limpiar el elemento flags cuando se pinte solo una bandera
  // este evento se dispara cuando busca la bandera
  document
    .getElementById('flags')
    .insertAdjacentHTML('beforeend', layoutflag(info))
  eventClickFlagName(info.name)
}

const clearFlags = function () {
  const $flags = document.getElementById('flags')
  $flags.innerHTML = ''
}

//////////////////////////////////////////////////////////

const buscarPais = function () {
  const elBuscar = document.getElementById('btnBuscar')
  const name = document.getElementById('nameCountrie')
  elBuscar.addEventListener('click', () => {
    api.getCountrieByName(name.value)
  })
}

const eventClickFlagName = function (name) {
  const element = document.getElementById(name)
  element.addEventListener('click', (event) => {
    if (event && event.currentTarget && event.currentTarget.id) {
      api.getCountrieByName(event.currentTarget.id)
    }
  })
}

const darkMode = function () {
  const element = document.getElementById('darkMode')
  element.addEventListener('click', () => {
    const bodyElement = document.getElementById('main')
    // definir header
    const headerElement = document.getElementById('headerDark')

    // definir flags
    const flagsElement = document.getElementsByClassName('flag')

    if (bodyElement.classList.contains('dark')) {
      bodyElement.classList.remove('dark')
      // definir header
      headerElement.classList.remove('dark')
      // definir flags

      for (let index = 0; index < flagsElement.length; index++) {
        const flag = flagsElement[index]
        flag.classList.remove('dark')
      }
    } else {
      bodyElement.classList.add('dark')
      // definir header
      headerElement.classList.add('dark')
      // definir flags

      for (let index = 0; index < flagsElement.length; index++) {
        const flag = flagsElement[index]
        flag.classList.add('dark')
      }
    }
  })
}

const init = function async() {
  const banderas = api.allCountries()
  banderas.then((banderas) => {
    for (let index = 0; index < banderas.length; index++) {
      pintarInFoBanderas(banderas[index])
    }
  })

  darkMode()
  buscarPais()
}

init()
