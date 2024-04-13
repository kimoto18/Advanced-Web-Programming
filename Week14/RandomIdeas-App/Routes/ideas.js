const express = require(express);
const router = express.router();

//Get all ideas endpoint
router.get('/', req, res => {
    res.send('Welcome to Random Ideas')
})
//Get single idea
router.get('/api/ideas:id', (req, res) => {
    //req.params.id
    const idea = ideas.find((idea) => idea.id === +req.params.id)

    if(!idea) {
       return res
       .status(404)
       .json({success: false, error: 'Resource not found'});
    } else{
       return res.json({success: true, data: idea});
    }
});


router.post('/', req, res => {
    const idea = {
        id: ideas.length + 1,
        text: req.body.text,
        tag: req.body.tag,
        username: req.body.username,
        date: new Date().toISOString.slice(0, 10)
    }
    console.log(idea);

    ideas.push(idea);
    res.json({success: true, date: idea});
})

router.put('/:id', (req, res) => {
    //req.params.id
    const idea = ideas.find((idea) => idea.id === +req.params.id)

    if(!idea) {
       return res
       .status(404)
       .json({success: false, error: 'Resource not found'});
    } else{
       const index = ideas.indexOf(idea);
       ideas.aplice(index, 1);
       res.json({success: true, data: {}});
    }
});

module.exports = router;