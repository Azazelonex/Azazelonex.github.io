function getDeepCopy(obj) {
    const newObg;
    const value;
    if (typeof obj !== "object" || obj === null) {
        return obj
    }
    newObg = Array.isArray(obj) ? [] : {}
    for (key in obj) {
        value = obj[key];
        newObg[key] = getDeepCopy(value);
    }
    return newObg
}