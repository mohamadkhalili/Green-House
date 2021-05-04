


const promiseMiddleware = store => next => action => {
    if (isPromise(action.payload)) {
        console.log('prommise');
        console.log(action.payload);
    }
    else{
        console.log('not promisse');
    }
    next(action);
};

function isPromise(v) {
    return v && typeof v.then === 'function';
};

export {promiseMiddleware}