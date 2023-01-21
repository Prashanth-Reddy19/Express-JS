

const express = require('express');

const contactcontroller=require('../controllers/contactus')

const router = express.Router();

// /admin/add-product => GET
router.get('/contactUs', contactcontroller.getcontactcontroller);

// /admin/add-product => POST
router.post('/contactUs', contactcontroller.postcontactcontroller);

module.exports=router