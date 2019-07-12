export const SUBTRACT = 'SUBTRACT';

export default (payload) => {
    return {
        type: SUBTRACT,
        value: payload
    }
}