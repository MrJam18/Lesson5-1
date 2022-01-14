const initState = {
    news: [],
    error: false,
    loading: true
}
export const newsReducer = (state = initState, action) => {
    switch(action.type) {
        case 'NEWS::CHANGE_NEWS': 
        return ({ ...state,
                news: action.news
         })
        case 'NEWS::SET_ERROR':
            return ({
                ...state, 
                error: action.error
            })
        case 'NEWS::SET_LOADING': 
            return ({
                ...state,
                loading: action.loading
            })
         default: return state;
    }
}