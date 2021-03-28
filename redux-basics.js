const redux = require('redux');
const createStore = redux.createStore;

//Reducer
const rootReducer = (state, action) => {
    return state;
}


//Store
//Neds a reducer as an argument, thats why we define the reducer first
const store = createStore(rootReducer);
console.log(store.getState());





//Dispatching action


//Subscription