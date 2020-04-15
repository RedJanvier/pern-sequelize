import { Post, Comment, User } from '../database/models';

export const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    return res.status(201).json({
      post,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: Comment,
          as: 'comments'
        },
        {
          model: User,
          as: 'author'
        }
      ]
    });
    return res.status(200).json({ posts });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export const getPostById = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findOne({
      where: { id: postId },
      include: [
        {
          model: Comment,
          as: 'comments',
          include: [
            {
              model: User,
              as: 'author',
            }
          ]
        },
        {
          model: User,
          as: 'author'
        }
      ]
    });
    if (post) {
      return res.status(200).json({ post });
    }
    return res.status(404).send('Post with the specified ID does not exists');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export const updatePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const [updated] = await Post.update(req.body, {
      where: { id: postId }
    });
    if (updated) {
      const updatedPost = await Post.findOne({ where: { id: postId } });
      return res.status(200).json({ post: updatedPost });
    }
    throw new Error('Post not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const deleted = await Post.destroy({
      where: { id: postId }
    });
    if (deleted) {
      return res.status(204).send("Post deleted");
    }
    throw new Error("Post not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

