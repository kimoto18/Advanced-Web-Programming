const express = require('express');
const port = 5001;

const ideas = [
    {
        id: 1,
        text: 'Technology newsletter  for all your tech needs',
        tag: 'Technology',
        username: 'MysteryNerd',
        date: '2022-19-03'
    },
    {
        id: 2,
        text: 'Create a gaming PC from scratch',
        tag: 'Hardware',
        username: 'RandomDev',
        date: '2019-15-04'
    },
    {
        id: 3,
        text: 'Auto pay subscriptions',
        tag: 'Software',
        username: 'Dev01',
        date: '2023-08-11'
    }
]

const app = express();
//Get all ideas endpoint
app.get('/', req, res => {
    res.send('Welcome to Random Ideas')
});

const ideaRouter = req (./routes/ideas.js)
    
app.listen(port, () => console.log('Server listening on port ${port}'));

