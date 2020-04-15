import { Router } from 'express';
import { getAllPosts, getPostById, createPost, updatePost, deletePost } from '../controllers';

const router = Router();

router
    .route('/')
    .get((req, res) => res.send('Welcome'));

router
    .route('/posts')
    .get(getAllPosts)
    .post(createPost);

router
    .route('/posts/:postId')
    .get( getPostById)
    .put(updatePost)
    .delete(deletePost);

export default router;
