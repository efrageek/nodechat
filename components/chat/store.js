const Model = require('./model');

function createChat (chat) {
    const myChat = new Model(chat);
    myChat.save();
 }
 
async function getChat() {
    return await Model.find().populate('users').exec();
    
} 


module.exports = {
    create: createChat,
    list: getChat,
}