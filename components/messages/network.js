const express = require('express');
const multer = require('multer');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

const upload = multer({
    dest:'public/files'
})

router.get('/', (req, res) => {
    const filterMessage = req.query.user || null;
    controller.getMessage(filterMessage)
    .then((messageList) => {
        response.succes(req, res, messageList, 200);
    })
    .catch(e => {
        response.error(req, res, 'Error inesperado', 500, e);
    })
})

router.post('/', upload.single('file'), (req, res) => {
   
    console.log(req.file);

    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
        .then((fullMessage) => {
            response.succes(req, res, fullMessage, 201);
        })
        .catch(error => {
            response.error(req, res, 'Error inesperado', 400, 'Datos incompletos');

        });
    ;

});

router.patch('/:id', (req, res) => {

    
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.succes(req, res, data, 200)
        })
        .catch( e => {
            response.error(req, res, 'Error interno', 500, e);
        });
    
})

router.delete('/:id', (req, res) => {
    controller.deleteMessage (req.params.id)
        .then(() => {
            response.succes(req, res, `Usuario ${req.params.id} eliminado`, 200)
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        })
})
module.exports = router;