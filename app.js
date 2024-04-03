const express = require("express");
const expressLayout = require("express-ejs-layouts");
const usersRouter = require('./router/userRouter');
const db = require('./server/config/db')
const crons = require('./server/utils/cron')

crons.start();

const path = require('path')
const publicPath = path.join(__dirname, 'public')
const app = express();
const PORT = process.env.PORT || 4002

db.connectDB();


app.use(express.json());

app.use(express.urlencoded({extended: true }))


// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');;
app.set('view engine', 'ejs');






app.use(express.static(publicPath))

app.use('/', usersRouter)

app.get('*', (req, res) => {
    res.status(404).render('404')
})

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})

