export const DELETE_RESULT = 'DELETE_RESULT';

export default (payload) => {
    return {
        type: DELETE_RESULT,
        resultId: payload
    }
}