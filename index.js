const express = require('express')
const exphbs = require('express-handlebars')
const sequelize = require('sequelize')

const app = express()

app.engine( 'handlebars', exphbs.engine())
app.set( 'view engine', 'handlebars' )
app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req,res) => {
    res.render('home')
})
app.get('/Pag1', (req,res) => {
    res.render('pag1')
})
app.get('/Pag2', (req,res) => {
    res.render('pag2')
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
})
