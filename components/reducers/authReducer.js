export const AuthReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESSFUL':
            return action.product
            break;
        case 'LOGIN_FAIL':
            return (state.length ? state.filter(e=> e.price >= 20): '');
            break;
        case 'LOGIN_ERROR':
            return (state.length ? state.filter(e=> e.price >= 20): '');
            break;
        case 'SIGN_UP_FAIL':
            return (state.length ? state.filter(e=> e.price >= 20): '');
            break;
        case 'SIGN_UP_ERROR':
            return (state.length ? state.filter(e=> e.price >= 20): '');
            break;
        case 'SIGN_UP_SUCCESSFUL':
            return (state.length ? state.filter(e=> e.price >= 20): '');
            break;
        default:
            return state;
    }
}
