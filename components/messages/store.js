const db = require('mongoose');
const Model = require('./model');

//mongodb+srv://USER:USER1234@telegrom-lhpui.mongodb.net/test

db.Promise = global.Promise;
db.connect('mongodb+srv://USER:USER1234@telegrom-lhpui.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

console.log('[db] conectada con exito');

function addMessage (message) {
    //  list.push(message);
    const myMessage = new Model(message);
    myMessage.save();
 }
 
async function getMessage() {
     //return list;
     const messages = await Model.find();
     return messages;
} 



module.exports = {
    add: addMessage,
    list: getMessage
}