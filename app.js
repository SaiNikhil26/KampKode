const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
require('dotenv').config();
const serviceAccount = require('./firebase.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const app = express();
if(db)
    {
        console.log("Connected to database");
    }
    else
    {
        console.log("Not connected to database");
    }


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const formRoute = require('./routes/form');
app.use('/',formRoute);

const PORT = 3000;
app.listen(PORT,()=>{

})