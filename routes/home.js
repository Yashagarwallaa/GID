const express = require('express');
const router = express.Router();
const { default: mongoose } = require('mongoose');
const BookModel = require('../models/book.model');
const db = mongoose.connection;
router.get('/',(req,res)=>{
    db.collection('lists').find((err,docs)=>{
        res.render('home', {lists :docs});
    }).catch((err)=>{
        console.log(err);
    })
})

router.post('/add',async(req,res)=>{
  
    const bookname  =req.body.bookname;
    const price = req.body.price;

    db.collection('lists').insertOne({
        bookname,price
       },(err,collection)=>{
        if(err){
          throw err;
        }
        console.log("Record inserted succesfully");
       });
})

//PUT
router.put("/update/:id", async(req,res)=>{
    let newid = req.params.id;
    let olddata = await BookModel.findById(newid);
    olddata = await BookModel.findByIdAndUpdate(newid,req.body,{new:true,
      useFindandModify: true,
      runValidators: true
    })
    if(olddata==null)return res.status(500).send("No such data exists");
    res.status(200).json({
      olddata
    })
  })
  
  
  //delete
router.delete('/delete/:id',async(req,res)=>{
         let delid = req.params.id;
         let data = await BookModel.findById(delid);
         if(data==null)return res.status(500).send("No such data exists");
         await data.deleteOne();
        return res.status(200).send("Data Deleted Successfully");
  })
module.exports = router