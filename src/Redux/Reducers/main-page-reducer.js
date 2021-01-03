import {mainPageAPI} from "../../API/API";
import {setUserHistory} from "./historypage-reducer";

const SET_NEW_IMAGE = "SET_NEW_IMAGE";
const TOGGLE_BUTTON = "TOGGLE_BUTTON";

let initialState = {
    imageURL: "",
    isDisabled: false
};

export const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_IMAGE:
            return {
                ...state,
                imageURL: action.imageURL
            }
        case TOGGLE_BUTTON:
            return {
                ...state,
                isDisabled: action.value
            }
        default:
            return state;
    }
}

export const setImageURL = (imageURL) => ({type: SET_NEW_IMAGE, imageURL});
export const toggleButton = (value) => ({type: TOGGLE_BUTTON, value})
export const getImageURL = () => async (dispatch) => {
    dispatch(toggleButton(true))
    let response = await mainPageAPI.getImageURL()
    if (response.meta.status === 200) {
        let url = response.data.images.downsized_medium.url;
        let id = response.data.id;
        let title = response.data.title;
        let date = new Date().toLocaleString()

        dispatch(setImageURL(url))
        dispatch(setUserHistory(url,title,id,date))
        dispatch(toggleButton(false))
    }
}