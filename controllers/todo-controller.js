const Todo = require('../models/todo');

module.exports.addTodo = async function(req, res){
    try{
        const newTodo = await Todo.create({
            data: req.body.data,
            createdAt: Date.now()
        })
         await newTodo.save();
         return res.status(200).json(newTodo);
    } catch(err){
        return res.status(500).json(err.message);
    }
}

module.exports.getAllTodos = async function(req, res){
    try{
         const todos = await Todo.find({}).sort({ 'createdAt': -1 }) //new first
         return res.status(200).json(todos);
    } catch(err){
        return res.status(500).json(err.message);
    }
}
module.exports.toggleTodoDone = async function(req, res){
    try{
        //get from db
        const todoRef = await Todo.findById(req.params.id);
        const todo = await Todo.findOneAndUpdate(
            {_id: req.params.id},
            { done: !todoRef.done }
        ) 

        await todo.save();

         return res.status(200).json(todo);
    } catch(err){
        return res.status(500).json(err.message);
    }
}

module.exports.updateTodo = async function(req, res){
    try{
        
        await Todo.findOneAndUpdate(
            {_id: req.params.id},
            { data: req.body.data }
        ) 
        const todo = await Todo.findById(req.params.id);
        // await todo.save();

         return res.status(200).json(todo);
    } catch(err){
        return res.status(500).json(err.message);
    }
}

module.exports.deleteTodo = async function(req, res){
    try{
        
        const todo = await Todo.findByIdAndDelete(req.params.id) 
        // await todo.save();

         return res.status(200).json(todo);
    } catch(err){
        return res.status(500).json(err.message);
    }
}