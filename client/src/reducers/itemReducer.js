
import { ITEMS_LOADING, GET_ITEMS_SUCCESS, GET_ITEMS_FAIL } from "../actions/types";

const initialState = {
    items: [],
    loading: false,
    err: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            };
        
        case GET_ITEMS_SUCCESS:
            return {
                ...state,
                items: action.payload,
                loading: false,
                err: null
            };
        
        case GET_ITEMS_FAIL:
            return {
                ...state,
                loading: false,
                err: action.err
            };
            
        default:
            return state;
    }
}

