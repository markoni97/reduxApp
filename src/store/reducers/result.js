import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    // const index = 2;
    // const newArray = [...state.results];
    // newArray.splice(index, 1);
    //Using filter here, because it returns a new array
    const results = state.results.filter(result => result.id !== action.elementId);
    return updateObject(state, {results: results});
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.STORE_RESULT:
            //const results = [...state.results];
            //results.push(state.counter);
            //concat() does tha same thing as push but return a new array with that value
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
            
        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action);
            
        default:
            return state
    }
};

export default reducer;