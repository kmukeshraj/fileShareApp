const router = require('express').Router();
const File = require('../models/file');


router.get('/:uuid', async(req, res)=> {

    try {
        const file = await File.findOne({uuid:req.params.uuid});
    } catch(err) {
    return res.render('')
    }



})















module.exports= router;