const store = require('./store');


function createChat(users) {
    return new Promise ((resolve, reject) => {
        if (!users || !Array.isArray(users)) {
            console.error('[Chat controller] Usuario no existe o es invalido');
            reject('Datos incompletos');
            return false
        }

        const fullChat = {
            users,
            date: new Date()
        }
        
        return store.create(fullChat);
        
        
        console.group('controller.createChat')
        console.log(fullChat);
        console.groupEnd('controller.createChat')
    })
    
}

function getChat () {
    return new Promise ((resolve,reject) => {
        resolve (store.list());
    })
}




module.exports = {
    createChat,
    getChat
}