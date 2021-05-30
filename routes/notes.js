const express =  require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send([
        {
            id: 1,
            title: 'k8s course',
            content: 'Hey how are you. This is a great course you kno...',
            color: 'blue'
        },
        {
            id: 2,
            title: 'blog on mean',
            content: 'Hey how are you. This is a great course you kno..Hey how are you. This is a great course you kno..Hey how are you. This is a great course you kno..Hey how are you. This is a great course you kno..Hey how are you. This is a great course you kno..s.',
            color: 'green'
        },
        {
            id: 3,
            title: 'time well spent',
            content: 'Hey how are you. This is a great course you kno...',
            color: 'yellow'
        },
        {
            id: 4,
            title: 'Data structures and algo',
            content: 'Hey how are you. This is a great course you kno...',
            color: 'pink'
        },
        {
            id: 3,
            title: 'time well spent',
            content: 'Hey how are you. This is a great Hey how are you. This is a great course you kno..Hey how are you. This is a great course you kno..Hey how are you. This is a great course you kno..Hey how are you. This is a great course you kno..Hey how are you. This is a great course you kno..s.course you kno...',
            color: 'yellow'
        },
        {
            id: 4,
            title: 'Data structures and algo',
            content: 'Hey how are you. This is a great course you kno...',
            color: 'pink'
        },
        {
            id: 3,
            title: 'time well spent',
            content: 'Hey how are you. ThisHey how are you. This is a great course you kno..Hey how are you. This is a great course you kno..Hey how are you. This is a great course you kno..Hey how are you. This is a great course you kno..Hey how are you. This is a great course you kno..s. is a great course you kno...',
            color: 'yellow'
        },
        {
            id: 4,
            title: 'Data structures and algo',
            content: 'Hey how are you. This is a great course you kno...',
            color: 'pink'
        },
        {
            id: 3,
            title: 'time well spent',
            content: 'Hey how are you. This is a great course you kno...',
            color: 'yellow'
        },
        {
            id: 4,
            title: 'Data structures and algo',
            content: 'Hey how are you. This is a great course you kno...',
            color: 'pink'
        },
        {
            id: 3,
            title: 'time well spent',
            content: 'Hey how are you. This is a great course you kno...',
            color: 'yellow'
        },
        {
            id: 4,
            title: 'Data structures and algo',
            content: 'Hey how are you. This is a great course you kno...',
            color: 'pink'
        },
        {
            id: 3,
            title: 'time well spent',
            content: 'Hey how are you. This is a great course you kno...',
            color: 'yellow'
        },
        {
            id: 4,
            title: 'Data structures and algo',
            content: 'Hey how are you. This is a great course you kno...',
            color: 'pink'
        }
    ]);
});

router.put('/:id', (req, res, next) => {
    res.send(req.params.id);
});

router.post('/:id', (req, res, next) => {
    res.send(req.params.id);
});

router.delete('/:id', (req, res, next) => {
    res.send(req.params.id);
});

module.exports = router;