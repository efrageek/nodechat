const store = require('./store');


function createChat(users) {
    return new Promise ((resolve, reject) => {
        if (!users || !Array.isArray(users)) {
            console.error('[Chat controller] no hay usuario');
            reject('Datos incompletos');
            return false
        }

        const fullChat = {
            users,
            date: new Date()
        }
        
        store.create(fullChat);
        
        
        console.group('controller.createChat')
        console.log(fullChat);
        console.groupEnd('controller.createChat')
        resolve(fullChat);

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