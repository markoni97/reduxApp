const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
};

//Reducer
//Gets the current state and the action and outputs the updated state
//Never mutate any data.. NEVER
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
}

//Store
//Neds a reducer as an argument, thats why we define the reducer first
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription
//Takes a function that will be executed when ever the state is updated
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});



//Dispatching action
//Takes an action that is a javascript object that needs to have a 'type' propertry, and a payload.
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});


