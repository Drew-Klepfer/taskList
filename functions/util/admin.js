/* import firebase admin and initialize firestore db obj */
const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();

module.exports = { admin, db };