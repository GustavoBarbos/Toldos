const { request } = require('express');
const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const connectDb = require('./config/db.config');

const Todo = require('./models/Todo');

connectDb()

const app = express();

app.use(express.json());

app.get('/todo', async (req, res) => {
    try {
      const todo = await Todo.find();
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ msg: 'Error' });
    }
  });

  app.post('/todo', async (req, res) => {
    
    try {
    
      const newTodo = await Todo.create(req.body);
   
      res.status(201).json(newTodo);

    } catch (error) {
      res.status(500).json({ msg: 'ServerError' });
    }
  });
  
  app.put('/todo/:id', async (req,res) => {

    const {id} = req.params
    const payload = req.body

    try {
      
      const updateTodo = await Todo.findOneAndUpdate({_id: id}, payload, {new: true})
      res.status(200).json(updateTodo)

    } catch (error) {

      res.status(500).json({msg: 'error'})

    }
  });

  app.delete('/todo/:id' , async (req,res) => {

    const {id} = req.params;
    try {
      
      await Todo.findByIdAndDelete(id);
      res.status(204).json()

    } catch (error) {
      
      res.status(500).json({msg: 'error'})
    }
  });




app.listen(27017, () => console.log("Started"));