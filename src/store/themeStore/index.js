const initialState = {
    isDarkTheme: false
}

export default function themeReducer(state = initialState, action) {
    switch (action.type) {
        case 'THEME-SWITCH':
            return {
                isDarkTheme: !state.isDarkTheme
            }
        case 'THEME-SET':
            return {
                isDarkTheme: action.theme
            }
        default:
            return state
    }
}