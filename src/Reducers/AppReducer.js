function AppReducer(state, action) {

    const stateActionAppReducer = {
        state: state,
        action: action
    }

    switch (action.type) {
        case 'admin_login':
            return setToken(stateActionAppReducer)
        case 'admin_logout':
            return {
                ...state,
                authenticated : false
            }
        case 'change_loading':
            return {
                ...state,
                loading : action.payload.loading
            }
        default:
            return state;
    }

}

function setToken(stateAction) {

    localStorage.setItem("admin_token", JSON.stringify(stateAction.action.payload.token));
    localStorage.setItem("admin_info", JSON.stringify(stateAction.action.payload.admin));

    return {
        ...stateAction.state,
        authenticated : true
    }
}




export default AppReducer;