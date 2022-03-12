const express = require('express');
const app = express();
const morgan = require('morgan');


//Settings
app.set('port',process.env.PORT || 3030);
app.set('json spaces', 2);


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes 
app.use(require('./routes/index'));
app.use('/api/pj',require('./routes/pj'));
app.use('/api/users',require('./routes/users'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
