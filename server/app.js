const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');

const corsOptions = {
    origin(origin, callback) {
        callback(null, true);
    },
    credentials: true
}

const app = express();
app.use(cors(corsOptions));
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,token');
    next();
}
app.use(allowCrossDomain);
app.use('/graphql', graphqlHTTP({

    schema, 
    graphiql: true,
}));
const PORT = 4000;

app.listen(PORT,  err => {
    err ? console.log(error) : console.log("Server OK");
});
