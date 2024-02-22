const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')
const { User } = require('../backend/db')

app.use(express.json());

app.use(cors({
    origin: ['https://instaback-ten.vercel.app', 'https://linstagram.vercel.app/'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

app.get('/' ,(req, res) => {
    res.status(200).send("Home reached")
})

app.post('/', async (req, res) => {
    const {username, password} = req.body

    const response = await User.create({
        username : username,
        password : password
    })

    res.status(200).json({response})
})

app.listen(port , () => {
    console.log(`app is listening on port ${port}`)
})