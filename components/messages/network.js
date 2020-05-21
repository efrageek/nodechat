const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
    controller.getMessage()
    .then((messageList) => {
        response.succes(req, res, messageList, 200);
    })
    .catch(e => {
        response.error(req, res, 'Error inesperado', 500, e);
    })
})

router.post('/', (req, res) => {
   
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.succes(req, res, fullMessage, 201);
        })
        .catch(error => {
            response.error(req, res, 'Error inesperado', 400, 'Datos incompletos');

        });
    ;

});

module.exports = router;