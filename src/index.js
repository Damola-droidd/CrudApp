// const { json } = require('express');
const express = require('express');
const app = express()
const port = 6000;
const dbsetup= require('./database/db');
const Routes= require('./routes/employeeRoutes')

app.use(express.json());


dbsetup()

app.use(Routes)


app.listen(port,()=> console.log('app is running on port 6000'))