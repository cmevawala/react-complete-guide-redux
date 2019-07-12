import { STORE_RESULT } from '../actions/storeResult';
import { DELETE_RESULT } from '../actions/deleteResult';

const initialState = {
    results: []
};

const resultsReducer = (state = initialState, action) => {

    switch (action.type) {
        case STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    value: action.result
                })
            }

            case DELETE_RESULT:
                const updatedArray = state.results.filter(result => result.id !== action.resultId);

                return {
                    ...state,
                    results: updatedArray
                }
    }

    return state;
}

export default resultsReducer;