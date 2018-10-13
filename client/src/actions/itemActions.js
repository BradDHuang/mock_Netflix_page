import { ITEMS_LOADING, GET_ITEMS_SUCCESS, GET_ITEMS_FAIL } from "../actions/types";
import axios from "axios";

export const setItemsLoading = () => ({
    type: ITEMS_LOADING,
});

export const getItems = () => dispatch => {
    
    dispatch(setItemsLoading());
    axios({method: "get", url: "https://mock-netflix-page-happitt.c9users.io:8081/api/items"})
        .then(res => 
            dispatch({
                type: GET_ITEMS_SUCCESS,
                payload: res.data,
            })
        )
        .catch(err => 
            dispatch({
                type: GET_ITEMS_FAIL,
                err,
            })
        );
};


