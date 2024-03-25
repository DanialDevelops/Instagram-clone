import express from 'express';
import { Post } from '../models/postModel.js';

const router = express.Router();



router.post('/', async (req, res) => {
    try{
        if(
            !req.body.user || 
            !req.body.image || 
            !req.body.caption 
        ) {
            return res.status(400).send('Please provide user, image, and caption');
        }
        const newPost = {
            user: req.body.user,
            image: req.body.image,
            caption: req.body.caption,
        };

        const post = await Post.create(newPost)

        return res.status(201).send(post);
    } catch(error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

router.get('/', async (req, res) => {
    try{
        const post = await Post.find({});
        return res.status(200).json({
            count: post.length,
            data: post,
        });
    } catch(error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Find the post by ID and populate its comments
        const post = await Post.findById(id).populate('comments');

        if (!post) {
            return res.status(404).send('Post not found');
        }

        return res.status(200).json(post);
    } catch (error) {
        console.error('Error retrieving post:', error);
        res.status(500).send('Server Error');
    }
});

router.put('/:id', async (req, res) => {
    try{
        if(
            !req.body.user || 
            !req.body.image || 
            !req.body.caption 
        ) {
            return res.status(400).json('Please provide user, image, and caption');
        }

        const { id } = req.params;

        const results = await Post.findByIdAndUpdate(id, req.body)

        if(!results) {
            return res.status(404).json('No Post found');
        }

        return res.status(200).json('Post updated');


    }catch(error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const { id } = req.params;

        

        const results = await Post.findByIdAndDelete(id);

        if(!results) {
            return res.status(404).json('No post found');
        }

        return res.status(200).json('Post deleted');
    }catch(error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

export default router;
