export function toggleList(){
    return (dispatch) => {
        dispatch({type: 'LIST-TOGGLE'})
    }
}