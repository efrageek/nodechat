const store = require('./store');

function addUser(name) {
    if (!name) {
        return Promise.reject('NOmbre invalido');
    }
    
    const user = {
        name,
    };

    return store.add(user);
}


module.exports = {
    addUser
}