import axios from 'axios'

const token = '899aa395cd94757b7d777e0366330b5b'

export async function fetchAllData() {

    let data = {
        success: true,
        currencyValues: {},
        countryData: {},
    }

    await axios({
        method: 'GET',
        url: `http://data.fixer.io/api/latest?access_key=${token}`
    })
    .then(response => {
        data.currencyValues = response.data
    })
    .catch(() => {
        data.success = false
    })

    await axios({
        method: 'GET',
        url: `https://restcountries.eu/rest/v2/all`,
    })
    .then(response => {
        data.countryData = response.data
    })
    .catch(() => {
        data.success = false
    })

    return data
}