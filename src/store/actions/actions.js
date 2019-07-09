export const INCREMENT = 'INCREMENT';
export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const DECREMENT = 'DECREMENT';
export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const ADD = 'ADD';
export const add = (payload) => {
    return {
        type: ADD,
        value: payload
    }
}

export const SUBTRACT = 'SUBTRACT';
export const subtract = (payload) => {
    return {
        type: SUBTRACT,
        value: payload
    }
}

export const STORE_RESULT = 'STORE_RESULT';
export const storeResult = (payload) => {
    return {
        type: STORE_RESULT,
        result: payload
    }
}

export const DELETE_RESULT = 'DELETE_RESULT';
export const deleteResult = (payload) => {
    return {
        type: DELETE_RESULT,
        resultId: payload
    }
}