const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))
router.get('/posts', controllers.getAllPosts);
router.get('/posts/:postId', controllers.getPostById);

router.post('/posts', controllers.createPost);

router.put('/posts/:postId', controllers.updatePost);

router.delete('/posts/:postId', controllers.deletePost);

module.exports = router;
