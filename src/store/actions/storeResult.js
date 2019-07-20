
import saveResult from '../thunk/saveResult'

export const STORE_RESULT = 'STORE_RESULT';

export default (payload) => {
    
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(saveResult(STORE_RESULT, payload));
        }, 2000);
    }

}