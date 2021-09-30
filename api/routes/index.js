const express = require('express');
const router = express.Router();
const controller = require('../controller/index.controller');

router.route('/').get(controller.getAll);
/* router.route('/').get((req,res)=>{

    res.send('<h1>cool working</h1>')
}) */
module.exports = router;