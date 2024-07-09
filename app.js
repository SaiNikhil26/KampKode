const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const serviceAccount = require('./kampkode-450ee-firebase-adminsdk-kiq9k-0d2841a509.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const app = express();


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const formRoute = require('./routes/form');
app.use('/',formRoute);

const PORT = 3000;
app.listen(PORT,()=>{
})