import express from 'express';
import { Comment } from '../models/commentModel.js';
import { Post } from '../models/postModel.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        if (!req.body.user || !req.body.text || !req.body.post) {
            return res.status(400).send('Please fill in missing field');
        }

        const newComment = {
            user: req.body.user,
            text: req.body.text,
            post: req.body.post
        };

        // Create the comment
        const comment = await Comment.create(newComment);
        
        if (!comment) {
            return res.status(500).send('Failed to create comment');
        }

        // Find the corresponding post and populate its comments
        const post = await Post.findById(req.body.post).populate('comments');

        if (!post) {
            return res.status(404).send('Post not found');
        }

        return res.status(201).send({ comment, post });
    } catch (error) {
        console.error('Error creating comment:', error);
        res.status(500).send('Server Error');
    }
});

router.get('/', async (req,res) => {
    try{
        const comments = await Comment.find({});
        res.status(200).json(comments)
    } catch(error){
        console.log(error.message)
        res.status(500).send('Server Error')
    }
})

export default router;
