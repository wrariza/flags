// Esta es la url base de la api
export default class ApiFlag {
  basePath = ' https://restcountries.eu/rest/v2/'

  async getCountrieByName(nameCountrie) {
    const response = await fetch(`${this.basePath}name/${nameCountrie}`)
    const data = await response.json()
    return data
  }

  async allCountries() {
    const response = await fetch(`${this.basePath}all`)
    const data = await response.json()
    return data
  }
}
