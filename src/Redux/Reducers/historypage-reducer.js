const SET_USER_HISTORY = "SET_USER_HISTORY";

const initialState = {
    history:[{
        url: [],
        title: [],
        id: [],
        date: []
    }]
}

export const historyPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_HISTORY:
            return {...state,
                history: [...state.history ,action.payload]
            }
        default:
            return state;
    }
}

export const setUserHistory = (url,title,id,date) => ({type:SET_USER_HISTORY, payload:{url,title,id,date}})