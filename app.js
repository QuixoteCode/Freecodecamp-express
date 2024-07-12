const express = require('express')
const app = express()
let {people} = require('./data')

// static assets
app.use(express.static('./methods-public'))
// parse form data
// diferente a lo proporcionado en el tutorial: https://stackoverflow.com/questions/67764774/typeerror-bodyparser-urlencoded-is-not-a-function
app.use(express.urlencoded())
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

app.post('/login',(req, res) => {
    console.log(req.body)
    res.send('POST ')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})