const express = require('express');
const todoController = require("../controller/todoController");

const router = express.Router();

router.post('/todo', async function(req,res){
    await todoController.create(req, res);
});

router.get('/todo/:id', async function(req,res){
    await todoController.get(req,res);
});

router.put('/todo/:id', async function(req,res){
    await todoController.update(req,res);
});

router.delete('/todo/:id', async function(req,res){
    await todoController.delete(req,res);
});

module.exports = router