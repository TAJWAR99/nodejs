const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getAllTasks = asyncWrapper(async (req,res) => {
        const getTasks = await Task.find({})
        res.status(200).json({getTasks}) //Send to the browser-app file
    //res.send('All Task')
})

const getTask = asyncWrapper(async  (req,res,next) => {
    
        const { id:taskID } = req.params
        const task = await Task.findById(taskID)
        if (!task) {
            return next(createCustomError(`No task with id : ${taskID}`, 404))
        }
        res.status(200).json({ task })
    //res.send('GET Task')
})
 
const createTask = async (req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({success:true, tasks:task})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
    //res.send('CREATE Task') 
}

const updateTask = async (req,res) => {
    try {
        const { id:taskID } = req.params
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
            new:true,
            runValidators:true,
        })
        if(!task){
            return res.status(404).json({success:false, msg:`Task with ${taskID} not found`})
        }
        res.status(200).json({success:true, task})
    } catch (err) {
        //if length not match with the db value length
        res.status(500).json({msg:err})
    }
    //res.send('UPDATE Task')
}

const deleteTask = async (req,res) => {
    try {
        const { id:taskID } = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({success:false, msg:`Task with ${taskID} not found`})
        }
        res.status(200).json({success:true, task})
    } catch (err) {
        //if length not match with the db value length
        res.status(500).json({msg:err})
    }
    //res.send('DELETE Task')
}

module.exports = { 
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask 
}