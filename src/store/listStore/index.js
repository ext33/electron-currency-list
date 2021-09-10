const initialState = {
    isToogle: false,
}

export default function listReducer(state = initialState, action) {
    switch (action.type) {
        case 'LIST-TOGGLE':
            return {
                isToogle: !state.isToogle,
            }
        default:
            return state
    }
}