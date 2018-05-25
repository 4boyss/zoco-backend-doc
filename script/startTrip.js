
(async function(){
    const firebase = require('firebase-admin')

    const random = (MIN =0 ,MAX = 10) => Math.floor(Math.random() * Math.floor(MAX)) + MIN;
    
    firebase.initializeApp({
        credential: firebase.credential.cert(require("../service-account.json")),
        databaseURL: process.env.FIREBASE_DATABASE_URL
    });
    
    const createdAt = (new Date()).getTime()
    const distance = random(100, 5000)
    const userId = '23456789'
    const data = {
        createdAt,
        userId
    }

    await firebase.database().ref('Trips').push().set(data)
    
    console.log(' ------- trip --------')
    process.exit(1)
})()