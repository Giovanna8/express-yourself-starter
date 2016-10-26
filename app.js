//pulling in dependencies from node
const path = require('path');

//pulling in dependencies from npm-package.json
const express = require('express');
const ejs = require('ejs');

//initialize our app
const app = express();

//set our views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//add a route to our app that renders our index-view
app.get('/', function(req, res, next)
    {
    res.render('index.ejs', {
        about: ["Hey there! My name is Giovanna. I live in Austin, TX. I'm a web developer in training."],
        skillsR: ['My current skills are:'],
        skills: ['HTML', 'CSS', 'JavaScript', 'Express.js', 'React'],
        hobbiesR: ['Some of my hobbies are:'],
        hobbies: ['Spending every moment I can with my partner', 'Using my coding superpowers', 'Learning any and everything I can possibly absorb', 'Painting & being creative every chance I get']
    });
});

//set up our server
const port = 3000;
app.listen(port, () => console.log(`Server listening on: ${port}`) );
