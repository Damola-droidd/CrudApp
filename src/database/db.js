//setup mongoose 
const mongoose= require('mongoose')


    const url=`mongodb+srv://DamolaUser:ea9kavkm@cluster0.6jpyp.mongodb.net/TESTretryWrites=true&w=majority`;
    module.exports = function(){
const connectionParams={
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true 
    }
    mongoose.connect(url,connectionParams)
        .then( () => {
            console.log('Connected to database ')
        })
        .catch( (err) => {
            console.error(`Error connecting to the database. \n${err}`);
        })

}

