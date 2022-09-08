const express = require('express');
const port = 4000;
const connectDB = require('./config/db');
const cors = require('cors')

//Server created
const app = express();


//Connect to DB
connectDB();

app.use(cors())
app.use(express.json());

//redirection to productRouter.js file for product routes
app.use('/api/products', require('./routes/productRoutes'))


//run Backend server
app.listen(port, () => {
    console.log('listening on port ' + port);
});
