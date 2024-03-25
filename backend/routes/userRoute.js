import express from 'express';
import { User } from '../models/userModel.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try{
        if(
            !req.body.username || 
            !req.body.email || 
            !req.body.password
        ) {
            return res.status(400).send("Please provide missing field ex. username, email or password")
        }
        const newUser = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        };
        const user = await User.create(newUser)

        return res.status(201).send(user);
    } catch(error) {
        console.log(error.message)
        return res.status(500).send('Server Error');
    }
})

router.get('/', async (req, res) => {
    try{
        const user = await User.find({});
        return res.status(200).json({
            count: user.length,
            data: user,
        });
    } catch(error){
        console.log(error.message)
        res.status(500).send("Server Error")
    }
});

router.get('/:id', async (req,res) => {
    try{


        const { id } = req.params

        const user = await User.findById(id)
        return res.status(200).send(user)


    }catch(error){
        console.log(error.message)
        res.status(500).send("Server Error")
    }
})

router.put('/:id', async (req,res) => {
    try{
        if(
            !req.body.username || 
            !req.body.email || 
            !req.body.password
        ) {
            return res.status(400).send("Please provide missing field ex. username, email or password")
        }

        const { id } = req.params

        const results = await User.findByIdAndUpdate(id, req.body)

        if(!results) {
            return res.status(404).json('No User found');
        }

        return res.status(200).send('User Updated')
       

    }catch(error){
        console.log(error.message)
        res.status(500).send("Server Error")
    }
})

router.delete('/:id', async (req, res) => {
    try{

        const { id } = req.params

        const results = await User.findByIdAndDelete(id, req.body)

        if(!results) {
            return res.status(404).json('No User found');
        }

        return res.status(200).send('User Deleted')

    }catch(error){
        console.log(error.message)
        res.status(500).send('Server Error')
    }
})

export default router;