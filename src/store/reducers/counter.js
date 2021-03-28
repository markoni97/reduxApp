import * as actionTypes from '../actions';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.INCREMENT:
            //Returning state immutably can be done like this
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState
        case actionTypes.ADD:
            //Or like this
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
        default:
            return state
    }
};

export default reducer;