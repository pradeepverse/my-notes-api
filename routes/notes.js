const express =  require('express');
const { create, fetch, update, delete: dbDelete } = require('../db');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.send(await fetch());
    } catch (error) {
        console.log('Error while retrieving notes', error);
        res.status(500).send('Error while retrieving notes');
    }
});

router.post('/', async (req, res, next) => {
    try {
        const result = await create(req.body);
        res.send(result);
    } catch (error) {
        console.log('Error while creating note', error);
        res.status(500).send('Error while creating note');
    }
});

router.put('/:id/edit', async(req, res, next) => {
    try {
        const result = await update(req.params.id, req.body);
        res.send(result);
    } catch (error) {
        console.log('Error while editing note', error);
        res.status(500).send('Error while editing note');
    }
});

router.delete('/:id/delete', async(req, res, next) => {
    try {
        const result = await dbDelete(req.params.id);
        res.send(result);
    } catch (error) {
        console.log('Error while deleting note', error);
        res.status(500).send('Error while deleting note');
    }
});

module.exports = router;