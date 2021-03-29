import * as actionTypes from './actionTypes';

const saveResult = (passedResult) => {
    //const updatedResult = passedResult * 2;
    return {
        type: actionTypes.STORE_RESULT,
        result: passedResult
    };
}

export const storeResult = (passedResult) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            //const oldCounter = getState().ctr.counter;
            //console.log(oldCounter);
            //Don't forget to execute the dispatched action
            dispatch(saveResult(passedResult));
        }, 2000);
    };
}

export const deleteResult = (passedId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        elementId: passedId
    };
}