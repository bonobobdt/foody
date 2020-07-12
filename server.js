

const express = require('express');
const nunjucks = require('nunjucks');
const recipes = require('./data');

const server = express();

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure("views", {
    express:server,
    noCache: true
});

server.get('/', function(req, res){
    return res.render('index', {recipes: recipes});
});

server.get('/about', function(req, res){
    return res.render('about');
});

server.get('/recipes', function(req, res){
    return res.render('recipes', { recipes: recipes});
});

server.get('/biruliro', function(req, res){
    return res.render('layout');
});


server.get("/recipes/:index", function (req, res) {
    const recipeIndex = req.params.index;
    const recipe = recipes[recipeIndex];
    return res.render('instructions', {recipe: recipe });
});

server.listen(5000, function(){
    console.log('server is running');
});