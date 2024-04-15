import express from 'express'
import userModel from '../models/UserModel.js'
import bcrypt from 'bcrypt'

const routes = express.Router()

routes.post('/add', (req, res) => {

    const user = req.body; 

    bcrypt.hash(user.password, 10, (err, hash) => {
        if(!err){
            user.password = hash;

            userModel.create(user).then((u) => {
                res.json(u)
            })
        }
    })
})

routes.get('/checklogin', (req, res) => {
    
})

routes.get('/checkmail', (req, res) => {
    
})

export default routes