export function toggleList(){

    // Function for switching list state
    // Params: none

    return (dispatch) => {
        dispatch({type: 'LIST-TOGGLE'})
    }
}