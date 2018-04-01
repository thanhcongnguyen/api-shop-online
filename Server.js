const express = require('express');
const app = express();
const port = process.env.PORT || '3000';


app.use(require('./Http/Controllers'));

app.listen(port, function(){
    console.log(`server running with port ${port}`);
})