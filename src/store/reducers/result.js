import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.STORE_RESULT:
            //const results = [...state.results];
            //results.push(state.counter);
            //concat() does tha same thing as push but return a new array with that value
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            }
        case actionTypes.DELETE_RESULT:
            // const index = 2;
            // const newArray = [...state.results];
            // newArray.splice(index, 1);
            //Using filter here, because it returns a new array
            const results = state.results.filter(result => result.id !== action.elementId);
            return {
                ...state,
                results: results
            }
        default:
            return state
    }
};

export default reducer;