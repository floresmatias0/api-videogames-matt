const { Router } = require('express');
const router = Router();

router.get('/:id', (req,res) => {  
    const {id} = req.params
});

module.exports = router;