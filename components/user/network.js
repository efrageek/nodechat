const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function(req, res) {
    controller.addUser(req.body.name)
        .then(data => {
            response.succes(req, res, data, 201 );
        })
        .catch(e => {
            response.error(req, res, 'internal error', 500, e);
        })
});

router.get('/', (req, res) => {
    console.log(req);

    // const filterUser = req.query.user || null;
    // controller.getMessage(filterMessage)
    // .then((messageList) => {
    //     response.succes(req, res, messageList, 200);
    // })
    // .catch(e => {
    //     response.error(req, res, 'Error inesperado', 500, e);
    // })
})



module.exports = router;
