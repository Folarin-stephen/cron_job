const cron = require('node-cron');
const User = require('../models/UserModel');
const sendEmail = require('./sendemail');

function start() {
    console.log('Cron job started');
    cron.schedule('0 7 * * *', async () => {

        const today = new Date();
        const monthDay = today.toISOString().slice(5, 10);
        console.log(monthDay);
        const users = await User.find({ birthdayMD: { $eq: monthDay }  });

        console.log(users);
        const message = `Happy birthday to you! Happy birthday to you! Happy birthday dear ${users.username}! Happy birthday to you`;
    users.forEach(user => {
        console.log(user.email);
        sendEmail(message, user)
        .then(result => {
            console.log('Email sent...', result);
        })
    })
        
       

    });
}




module.exports = { start };