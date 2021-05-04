import {SIGN_IN} from './../constants/actionTypes';

const initialState = {
    payload: "hihi"
}

export default (state = initialState , action) => {
    switch (action.type) {
        case SIGN_IN :
            return{
                ...state,
                payload: action.payload
            };
        default:
            return state;
    }

    return state;
};