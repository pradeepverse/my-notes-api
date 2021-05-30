const express =  require('express');
const { create, fetch, update, delete: dbDelete } = require('../db');
const router = express.Router();

router.get('/', async (req, res, next) => {
    res.send(await fetch());
});

router.post('/', async (req, res, next) => {
    const result = await create(req.body);
    res.send(result);
});

router.put('/:id/edit', async(req, res, next) => {
    const result = await update(req.params.id, req.body);
    res.send(result);
});

router.delete('/:id/delete', async(req, res, next) => {
    const result = await dbDelete(req.params.id);
    res.send(result);
});

module.exports = router;