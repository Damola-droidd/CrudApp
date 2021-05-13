  const express= require('express');
  const router= express.Router()
  const Employee=require("..//models/employee")
  
  
  
  //****CREATE EMPLOYEE*****
  router.post('/employees', function(req,res) {

    Employee.create({
     name: req.body.name,
     address: req.body.address,
     email: req.body.email,
     PhoneNumber: req.body.PhoneNumber,
     country: req.body.country
    },  (err,neweMployee)=>{
        if (err){
            return res.status(500).json({messege: err})
            return res.status(200).json({message: "new employee created", neweMployee})
        }
    })
 })





         //****FETCH */
//GET request to fetch all Employee
 router.get('/employees',(req, res)=>{
     //To fetch all employees ; model.find for multiples data and model.findOne will get only yhe particular data needed

 Employee.find({},(err, employees)=>{
     if (err){
         return res.status(500).json({message : err})
     }else{
         return res.status(200).json({employees})
     }
 })

 })


        router.get('/employees/:id',(req, res)=>{
    Employee.findOne({_id: req.params.id}, (err, employee)=>{
  if (err){
      return res.status(500).json({message: err})
  } else {
     return res.status(200).json({employee})
  }

  
})
})






//*****UPDATE */
router.put('/employees/:id',(req,res)=>{
Employee.findByIdAndUpdate(req.params.id, {
  name: req.body.name,
  address: req.body.address,
  email: req.body.email,
  PhoneNumber: req.body.PhoneNumber,
  country: req.body.country

 }, (err, employee)=>{
   if (err){
       return res.status(500).json({message: err})
   } else if (!employee){
       return res.status(404).json({message: "employee not found"})
   } else{
       employee.save ((err, savedEmployee)=>{
         if (err){
             return res.status(400).json({message: err})
         } else{
             return res.status(200).json({message: "Employee Record Updated Successfully"})
         }
       })
   }
 })

})



 //****DELETE */

 router.delete('/employees/:id',(req,res)=>{
Employee.findByIdAndDelete(req.params.id,(err, employee)=>{
 if(err){
     return res.status(500).json({message: err})
 }else if (!employee){
     return res.status(404).json ({message: "employee was not found"})
 }
 else{
     return res.status(200).json({message: "Employee Record Deleted "})

 }

     
     })
 })

 module.exports= router;