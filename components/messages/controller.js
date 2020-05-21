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

function getMessage() {
    return new Promise ((resolve,reject) => {
        resolve (store.list());
    })
}

module.exports = {
    addMessage,
    getMessage
}