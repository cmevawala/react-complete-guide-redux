const redux = require('redux');
const createStore = redux.createStore;

// The state can be of any type number, string, object etc.
const initialState = {
    counter: 0
};

// Reducer
// We always have one reducer, Multiple reducers get combined into one.
// Reducer is strongly connected to the store.
// state = current state, action = name of the action
// returns = updated state  
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }

    return state;
}


// Store
const store = createStore(rootReducer); // Store needs to be initialized with the reducer
console.log(store.getState());


// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());

// Subscription