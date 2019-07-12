export const ADD = 'ADD';

export default (payload) => {
    return {
        type: ADD,
        value: payload
    }
}