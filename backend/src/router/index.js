import Express from 'express'
import NumberRouter from './Number.route'

const Router = Express.Router()

Router.use('/number', NumberRouter)

export default Router