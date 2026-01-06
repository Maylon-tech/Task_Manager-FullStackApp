import express from 'express'
import { createTask } from '../controllers/task/taskControlle'

const router = express.Router()

router.post("/task/create", createTask)



export default router