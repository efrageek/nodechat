const store = require('./store');


function addMessage(user, message) {
    return new Promise ((resolve, reject) => {
        if (!user || !message) {
            console.error('[Message controller] no hay usuario o mensaje');
            reject('Datos incompletos');
            return false
        }

        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        }
        
        store.add(fullMessage);
        
        
        console.group('controller.Addmessage')
        console.log(fullMessage);
        console.groupEnd('controller.Addmessage')
        resolve(fullMessage);

    })
    
}

function getMessage(filterUser) {
    return new Promise ((resolve,reject) => {
        resolve (store.list(filterUser));
    })
}

 function updateMessage(id, message) {
    return new Promise(async (res, rej) => {
        if (!id || !message) {
            rej('Invalid data');
            return false;
        }

        const result = await store.updateText(id, message);
        res(result);
    })
}

function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('id invalido');
            return false
        }
        
        store.remove(id)
            .then(() => {
                resolve();
            })
            .catch(e => {
                reject(e)
            })
    });
}
module.exports = {
    addMessage,
    getMessage,
    updateMessage,
    deleteMessage
}