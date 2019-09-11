const express   = require('express')
const app = express()

app.use(express.static(__dirname + '/pub'))

app.get('/', (req, res)=>{
    res.status(200).sendfile('index.html')
})

app.listen(3000, ()=>{
    console.log('server is running on Port 3000')
})

