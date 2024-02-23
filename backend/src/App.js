import 'dotenv/config'
import Cors from 'cors'
import Express from 'express'
import Router from 'router'

const App = Express()
const Port = process.env.PORT || 8000

App.use(Cors())
App.use(Express.urlencoded({ extended: false }))
App.use(Express.json())

App.use('/', Router)

App.listen(Port, () => console.log(`App listening at port ${ Port }`))
