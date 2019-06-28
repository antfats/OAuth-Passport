const express = require('express');
const authRoutes = require('./routes/auth-routes');
const app = express();


//setting up view engine

app.set('view engine', 'ejs');

//setup routes
app.use('/auth', authRoutes);

//create home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log("Listening for requests on port:3000");
});

