const express=require('express');
const router =express.Router()

const Candidate = require('../model/candidate')
const Marks =require('../model/marks')

router.get('/',async(req,res)=>{
    try{
     const candidate =await Candidate.find()
     res.json(candidate)
    }catch(err){
        res.send('error',+err)
    }

})

//retrieve a single user detail by id
router.get('/:id', async(req,res) => {
    try{
     const user1 =await Candidate.findById(req.params.id)
     res.json(user1)
    }catch(err){
        res.send('error',+err)
    }

})

router.post('/',async(req,res)=>{
    const candidate =new Candidate({
        name: req.body.name,
        email:  req.body.email,
        address:  req.body.address
    })
    try{
        const a1 = await candidate.save()
        res.json(a1)
    }catch(err){
        res.send('error',err)
    }
})
//get marks
router.get('/marks',async(req,res)=>{
    try{
     const mar =await Marks.find()
     res.json(mar)
    }catch(err){
        res.send('error',+err)
    }

})


//insert marks
router.post('/marks',async(req,res)=>{
    const marks =new Marks({
        firstround: req.body.firstround,
        secondround:  req.body.secondround,
        thirdround:  req.body.thirdround
    })
    try{
        const a1 = await marks.save()
        res.json(a1)
    }catch(err){
        res.send('error',err)
    }
})

module.exports = router