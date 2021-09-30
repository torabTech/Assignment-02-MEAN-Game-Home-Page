const express = require('express');
const path = require('path');
const indexRoutes = require('./api/routes/index');
const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.use('/api/games',indexRoutes);

app.set('port',3000);
const server = app.listen(app.get('port'),function(){
    console.log('server is running at port: ',server.address().port);
});
