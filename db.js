const db = require('mongoose');

db.Promise = global.Promise;



//Creating database connection
//mongodb+srv://USER:USER1234@telegrom-lhpui.mongodb.net/test
async function connect(url) {
    await db.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
}



console.log('[db] conectada con exito');

module.exports = connect;