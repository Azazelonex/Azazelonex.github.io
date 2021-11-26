<<<<<<< HEAD
function getDeepCopy(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj
    }
    const newObg = Array.isArray(obj) ? [] : {}
    for (key in obj) {
        newObg[key] = getDeepCopy(obj[key]);
    }
    return newObg
=======
function getDeepCopy(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj
    }
    const newObg = Array.isArray(obj) ? [] : {}
    for (key in obj) {
        newObg[key] = getDeepCopy(obj[key]);
    }
    return newObg
>>>>>>> 8da6e68203ca4feed34aff6e8df298d0ef3da5c3
}