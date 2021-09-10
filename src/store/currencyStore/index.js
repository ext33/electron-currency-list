const initialState = {
    data: [],
    error: false
}

export default function currencyReducer(state = initialState, action) {
    switch (action.type) {
        case 'CUR-FETCH':
            return {
                data: action.currencyData,
                error: false
            }
        case 'CUR-ERROR':
            return {
                data: [],
                error: true
            }
        default:
            return state
    }
}