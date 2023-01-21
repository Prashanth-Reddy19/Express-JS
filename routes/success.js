const path = require('path');

const express = require('express');

const successController=require('../controllers/successfull')

const router = express.Router();

// /admin/add-product => GET
router.get('/success', successController.getSuccessfull);

// /admin/add-product => POST
router.post('/success', successController.postSuccessfull);

module.exports=router