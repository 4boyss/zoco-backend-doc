const firebase = require('firebase-admin')

firebase.initializeApp({
    credential: firebase.credential.cert(require("./service-account.json")),
    databaseURL: process.env.FIREBASE_DATABASE_URL
});

const email = 'peter@peter.com'
const password = '123456'
const firstName = 'peter'
const lastName = 'chang'

firebase.auth().createUser({
    email: email,
    password: password,
    displayName: `${firstName} ${lastName}`,
})
