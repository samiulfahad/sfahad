const express = require('express');
const hbs = require('hbs')
const path = require('path')

const app = express();
const port = process.env.PORT || 3000
app.use(express.static(path.join(__dirname, '../public/')))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../templates/views') )
hbs.registerPartials(path.join(__dirname, '../templates/partials'))


app.get('/',(req, res)=>{
    res.render('index')
})
app.get('/home',(req, res)=>{
    res.render('index')
})
app.get('/about',(req, res)=>{
    res.render('about')
})
app.get('*', (req, res)=>{
    res.render('404')
})
app.listen(port, ()=>{
    console.log('Listening on port '+port)
})

module.exports = app