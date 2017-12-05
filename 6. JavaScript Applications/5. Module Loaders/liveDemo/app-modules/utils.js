function clone (obj) {
    return JSON.parse(JSON.stringify(obj));
}

function* idGenerator () {
    let currentId = 0;

    while (true) {
        yield currentId;
        currentId += 1;
    }
}

export {clone, idGenerator};