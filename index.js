const receivesAFunction= (callbackFunc) => {
    callbackFunc()
}

const returnsANamedFunction = () => {
    return function anotherFunction() {

    }
}

const returnsAnAnonymousFunction = () => {
    return function() {
        
    }
}


