export function switchTheme() {
    return async (dispatch) => {
        dispatch({type: 'THEME-SWITCH'})
    }
}

export function setTheme(isDarkTheme) {
    return async (dispatch) => {
        dispatch({type: 'THEME-SET', theme: isDarkTheme})
    }
}