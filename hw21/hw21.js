function getDeepCopy(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj
    }
    const newObg = Array.isArray(obj) ? [] : {}
    for (key in obj) {
        newObg[key] = getDeepCopy(obj[key]);
    }
    return newObg
}