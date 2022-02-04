import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* 
ROUTES
*/
require('./routes')(app);


app.listen(5000, () => console.log('Server running'));