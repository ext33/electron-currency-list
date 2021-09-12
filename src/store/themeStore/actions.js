export function switchTheme() {
    
    // Function for switching app theme on click 
    // Params: none

    return async (dispatch) => {
        dispatch({type: 'THEME-SWITCH'})
    }
}

export function setTheme(isDarkTheme) {

    // Function for directly setting app theme
    // Params: isDarkTheme<Boolean>

    return async (dispatch) => {
        dispatch({type: 'THEME-SET', theme: isDarkTheme})
    }
}