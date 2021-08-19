const { static } = require('express');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 1111;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});

// --------------------------- MAIN START --------------------------- //
app.use(express.static('main'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/main/index.html') // Main Page Connection
});
// ---------------------------- MAIN END ---------------------------- //

// -------------------------- DESIGN START -------------------------- //
app.use(express.static('design'));

app.get('/design', function(req, res){
    res.sendFile(__dirname + '/design/design.html') // Design Page Connection
});
// --------------------------- DESIGN END --------------------------- //

// -------------------------- ACTIVITY START -------------------------- //
app.use(express.static('activity'));

app.get('/activity', function(req, res){
    res.sendFile(__dirname + '/activity/activity.html') // activity Page Connection
});
// --------------------------- ACTIVITY END --------------------------- //

// -------------------------- CTF START -------------------------- //
app.use(express.static('ctf'));

app.get('/ctf', function(req, res){
    res.sendFile(__dirname + '/ctf/ctf.html') // CTF Page Connection
});
app.get('/2', function(req, res){
    res.sendFile(__dirname + '/ctf/2/2.html') // CTF 2Page Connection
});
// --------------------------- CTF END --------------------------- //

// -------------------------- CTF INFO START -------------------------- //
app.use(express.static('ctf-info'));

app.get('/realworld', function(req, res){
    res.sendFile(__dirname + '/ctf-info/realworld.html') // realworld Page Connection
});
// --------------------------- CTF INFO END --------------------------- //
