const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to db
mongoose
	.connect(db)
	.then( () => console.log('Mongo DB Connected!'))
	.catch(err  => console.log(err));


app.get('/', (req,res) => res.send('Hello World'));

// User Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

app.listen(PORT, () => console.log('Listening at port :' + PORT));




