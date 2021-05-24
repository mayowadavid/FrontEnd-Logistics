export const AuthReducer = (state, action) => {
    switch(action.type){
        case 'ADD_REQUEST_SUCCESSFUL':
            return action.product
            break;
        case 'ADD_REQUEST_FAIL':
            return (state.length ? state.filter(e=> e.price >= 20): '');
            break;
        case 'ADD_REQUEST_ERROR':
            return (state.length ? state.filter(e=> e.price >= 20): '');
            break;
        case 'UPDATE_REQUEST_FAIL':
            return (state.length ? state.filter(e=> e.price >= 20): '');
            break;
        case 'UPDATE_REQUEST_ERROR':
            return (state.length ? state.filter(e=> e.price >= 20): '');
            break;
        case 'UPDATE_REQUEST_SUCCESSFUL':
            return (state.length ? state.filter(e=> e.price >= 20): '');
            break;
        default:
            return state;
    }
}
