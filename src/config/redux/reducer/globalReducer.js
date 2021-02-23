const initialState = {
    name: 'Syafiq'
}

const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME'){
        return {
            ...state,
            name: 'Sapit'
        }
    }
    
    return state;
}

export default globalReducer;