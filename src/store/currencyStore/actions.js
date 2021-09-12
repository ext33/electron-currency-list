import { fetchAllData } from '../api'

export function fetchData(){

    // Function for serialize and write currency data in store
    // Params: none

    return async (dispatch) => {

        let data = await fetchAllData()
        if (!data.success)
            dispatch({type: 'CUR-ERROR',})

        let parsedData = []

        await data.countryData.forEach(country => {
            for (let rate in data.currencyValues.rates) {
                if (rate === country.currencies[0].code)
                    parsedData.push({
                        flagCode: country.alpha2Code.toLowerCase(),
                        name: country.currencies[0].name,
                        rate: data.currencyValues.rates[rate]
                    })
            }
        })

        dispatch({type: 'CUR-FETCH', currencyData: parsedData})
    }
}