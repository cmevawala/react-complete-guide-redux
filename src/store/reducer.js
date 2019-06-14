const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
            break;
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
            break;

        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            }
            break;
        
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.value
            }

        case 'STORE_RESULT': 
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
            
        case 'DELETE_RESULT':
            const updatedArray = state.results.filter(result=> result.id  !== action.resultId);

            return {
                ...state,
                results: updatedArray
            }
    }

    // if (action.type === 'INCREMENT') {
    //     return {
    //         counter: state.counter + 1
    //     }
    // }

    // if (action.type === 'DECREMENT') {
    //     return {
    //         counter: state.counter - 1
    //     }
    // }

    // if (action.type === 'ADD') {
    //     return {
    //         counter: state.counter + action.value
    //     }
    // }

    // if (action.type === 'SUBTRACT') {
    //     return {
    //         counter: state.counter - action.value
    //     }
    // }

    return state;
}

export default reducer;