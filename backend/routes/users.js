const router = require('express').Router();
const User = require('../models/user.model');
// use user schema
let user=require('../models/user.model');

// get user info
router.route('/').get((req,res)=>{
    User.find()
    // output users in json format
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('Error: ' + err))
});

router.route('/add').post((req,res)=>{
    const username = req.body.username;

    // create new user object
    const newUser= new User({username});

    newUser.save()
    .then(()=>res.json('User added!'))
    .catch(err=>res.status(400).json('Error: ' + err))
})

module.exports=router;