export const STORE_RESULT = 'STORE_RESULT';

export default (payload) => {
    return {
        type: STORE_RESULT,
        result: payload
    }
}