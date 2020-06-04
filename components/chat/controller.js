const store = require('./store');


function createChat(users) {
    if (!users || !Array.isArray(users)) {
        console.error('[Chat controller] Usuario no existe o es invalido');
        return Promise.reject('Datos incompletos');
       
    }
    const fullChat = {
        users: users,
        date: new Date()
    }
 
    
    return store.create(fullChat);
        
        
}

function getChat (userId) {
    
    return  store.list(userId)
    
}




module.exports = {
    createChat,
    getChat
}