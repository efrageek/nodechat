const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', async (req, res) => {
    const users = req.body.users;
    try {
        const chat = await controller.createChat(users);
        response.succes(req, res, chat, 201);
    } catch(e) {
        response.error(req, res, 'Internal error', 500, e);
    }
})

router.get('/:userId', async (req, res) => {
    const users = await controller.getChat(req.params.userId);
    try {
        response.succes(req, res, users, 200)

    } catch(e) {
        response.error(req, res, 'Internal error', 500, e);
    }


});

router.get('/', async (req, res) => {
    const users = await controller.getChat();
    try {
        response.succes(req, res, users, 200)

    } catch(e) {
        response.error(req, res, 'Internal error', 500, e);
    }


});


module.exports = router;