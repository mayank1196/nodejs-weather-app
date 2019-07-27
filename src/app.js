// // const path=require('path')
// // const express=require('express')
// // const app=express()
// // const publicDirectorypath=path.join(__dirname,'../public')
// // const publicDirectorypath2=path.join(__dirname,'../templates')
// // console.log(publicDirectorypath1)
// // app.set('view engine','hbs')
// // app.set('views',publicDirectorypath2)

// // app.use(express.static(publicDirectorypath))
// //  app.get('',(req,res)=>
// // {
// //     res.render('index',{
// //         title:'weather app',
// //         name:'mayank kumar' 
// //     })
// // })
// // app.get('/about',(req,res)=>
// // {
// //     res.render('about')
// // })

// // app.get('/title',(req,res)=>
// // {
// //      res.send('<h1>Weather Service</h1>')
// // })
// // app.get('/weather',(req,res)=>
// // {
// //     res.send({
// //         location:'allahabad',
// //         forcast:'hot'
// //     })
// // })
// // app.listen(3000,()=>
// // {console.log('server ia at port 3000')

// // })
const path = require('path')
const express = require('express')
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')
const port=process.env.PORT || 3000
const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
console.log(viewsPath)
console.log('hi')
const partialsPath=path.join(__dirname,'../templates/partials')
// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather Information',
        name: 'Mayank Kumar'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Mayank Kumar'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        name: 'Mayank Kumar'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address)
    {
        return res.send({
           error:'You did not provide address' 
        })
    }
    

    geocode(req.query.address,(error,data)=>
    {
        if(error)
        {
            return res.send({
error
            })
        }
      forecast(data.latitude, data.longitude, (error, forcastdata) => {
          if(error)
          {
              return  res.send({
                error
                            })
          }
          res.send({
              forecast:forcastdata,
              name:req.query.address,
              location:data.location


          })
        console.log(data.location)
        console.log(forcastdata)
      })
    })





























    // res.send({
    //     forecast: 'It is snowing',
    //     location: 'Philadelphia',
    //     name: 'mercedes'
    // })
})

app.get('/products',(req,res)=>
{
    if(!req.query.search)
    {
        return res.send({
        error:'you must return search '
    })
        
    }
    console.log(req.query)
    res.send({
        products:[]
    })
})
app.get('/help/*',(req,res)=>
{
    res.render('errorpg',{
        title: 'Error',
        name: 'Msys',
        errorMessge:'Help  not found'

    })
})
app.get('*',(req,res)=>{
    res.render('errorpg',{
        title: 'Error',
        name: 'Msys',
        errorMessge:'Page not found'

    })
})

app.listen(port, () => {
    console.log('Server  s up on port 3000.'+port)
})
// const path = require('path')
// const express = require('express')

// const app = express()
// const publicDirectoryPath = path.join(__dirname, '../public')

// app.set('view engine', 'hbs')
// app.use(express.static(publicDirectoryPath))

// app.get('', (req, res) => {
//     res.render('index', {
//         title: 'Weather',
//         name: 'Andrew Mead'
//     })
// })

// app.get('/about', (req, res) => {
//     res.render('about', {
//         title: 'About Me',
//         name: 'Andrew Mead'
//     })
// })

// app.get('/help', (req, res) => {
//     res.render('help', {
//         helpText: 'This is some helpful text.'
//     })
// })

// app.get('/weather', (req, res) => {
//     res.send({
//         forecast: 'It is snowing',
//         location: 'Philadelphia'
//     })
// })

// app.listen(3000, () => {
//     console.log('Server is up on port 3000.')
// })
// const path = require('path')
// const express = require('express')

// const app = express()
// const publicDirectoryPath = path.join(__dirname, '../public')

// app.set('view engine', 'hbs')
// app.use(express.static(publicDirectoryPath))

// app.get('', (req, res) => {
//     res.render('index', {
//         title: 'Weather',
//         name: 'Andrew Mead'
//     })
// })

// app.get('/about', (req, res) => {
//     res.render('about', {
//         title: 'About Me',
//         name: 'Andrew Mead'
//     })
// })

// app.get('/help', (req, res) => {
//     res.render('help', {
//         helpText: 'This is some helpful text.'
//     })
// })

// app.get('/weather', (req, res) => {
//     res.send({
//         forecast: 'It is snowing',
//         location: 'Philadelphia'
//     })
// })

// app.listen(3000, () => {
//     console.log('Server is up on port 3000.')
// })
// const path = require('path')
// const express = require('express')

// const app = express()
// const publicDirectoryPath = path.join(__dirname, '../public')

// app.set('view engine', 'hbs')
// app.use(express.static(publicDirectoryPath))

// app.get('', (req, res) => {
//     res.render('index', {
//         title: 'Weather',
//         name: 'Andrew Mead'
//     })
// })

// app.get('/about', (req, res) => {
//     res.render('about', {
//         title: 'About Me',
//         name: 'Andrew Mead'
//     })
// })

// app.get('/help', (req, res) => {
//     res.render('help', {
//         helpText: 'This is some helpful text.'
//     })
// })

// app.get('/weather', (req, res) => {
//     res.send({
//         forecast: 'It is snowing',
//         location: 'Philadelphia'
//     })
// })

// app.listen(3000, () => {
//     console.log('Server is up on port 3000.')
// })