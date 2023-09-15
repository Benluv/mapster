import express from 'express';
import { User } from '../models/User';

const router = express.Router();
router.get('/users', (req, res) => {
    // Get all users from the database
    const users = [
        new User(1, 'John Doe', 'johndoe@example.com'),
        new User(2, 'Jane Doe', 'janedoe@example.com'),
    ]

    res.json(users);
})