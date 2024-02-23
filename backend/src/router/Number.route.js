import { Router } from 'express'
import NumberController from 'controller/Number.controller'

const UserRouter = Router()

UserRouter.post('/triangle', NumberController.Triangle)
UserRouter.post('/odd', NumberController.Odd)
UserRouter.post('/prime', NumberController.Prime)

export default UserRouter