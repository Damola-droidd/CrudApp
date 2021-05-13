const mongoose= require('mongoose')
            //CREATE SCHEMA
            const employeeSchema= new  mongoose.Schema ({
                name: String,
                address: String,
                email: String,
                PhoneNumber: String,
                country:String

            })
          
            
            const Employee = mongoose.model('Employee',employeeSchema);

         module.exports= Employee;


