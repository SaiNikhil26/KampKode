const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const db = admin.firestore();

router.get('/',(req,res) => {
    res.sendFile('index.html',{root:'views'});
});

router.post('/submit-form', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await db.collection('contacts').add({
      name,
      email,
      message,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    });
    res.send('<p>Form submitted successfully!</p><a href="/">Go back</a>');
  } catch (error) {
    console.error('Error writing document: ', error);
    res.status(500).send('Error submitting the form');
  }
});

module.exports = router;