import * as actionTypes from './actionTypes';

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    };
}

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    };
}

export const add = (passedValue) => {
    return {
        type: actionTypes.ADD,
        value: passedValue
    };
}

export const subtract = (passedValue) => {
    return {
        type: actionTypes.SUBTRACT,
        value: passedValue
    };
}