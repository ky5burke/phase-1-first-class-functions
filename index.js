function receivesAFunction (callback) {
    callback();
}

function returnsANamedFunction() {
    function innerFunction() {

    }
    return innerFunction;
}

function returnsAnAnonymousFunction() {
    return function() {

    };
  }
