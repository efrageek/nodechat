const Model = require('./model');

function createChat (chat) {
    const myChat = new Model(chat);
    return myChat.save();
 }
 
async function getChat(userId) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (userId) {
            filter = {
                users: userId
            }
        }
        Model.find(filter)
            .populate('users')
            .exec((err, populated) => {
            if(err) {
                reject(err);
                return false;

            }

            resolve(populated);
        });
        
    });
    
} 


module.exports = {
    create: createChat,
    list: getChat,
}