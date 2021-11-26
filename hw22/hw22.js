<<<<<<< HEAD
//first
function createRangeFilter(min, max) {
    return function filter(num) {
        return num >= min && num <= max;
    }
}

//second
function createKeyBy(propName) {
    return function keyBy(arr) {
        return arr.reduce((sortByKey, elem) => {
            if (!sortByKey[elem[propName]]) {
                sortByKey[elem[propName]] = [];
            }
                sortByKey[elem[propName]].push(elem);
                return sortByKey;
        }, {});
    };
}

//third
function createCalcPercent(percent) {
    return function calcPercent(value) {
        return value / 100 * percent;
    }
=======
//first
function createRangeFilter(min, max) {
    return function filter(num) {
        return num >= min && num <= max;
    }
}

//second
function createKeyBy(propName) {
    return function keyBy(arr) {
        return arr.reduce((sortByKey, elem) => {
            if (!sortByKey[elem[propName]]) {
                sortByKey[elem[propName]] = [];
            }
                sortByKey[elem[propName]].push(elem);
                return sortByKey;
        }, {});
    };
}

//third
function createCalcPercent(percent) {
    return function calcPercent(value) {
        return value / 100 * percent;
    }
>>>>>>> 8da6e68203ca4feed34aff6e8df298d0ef3da5c3
}