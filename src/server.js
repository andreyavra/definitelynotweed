const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => res.sendfile('src/main-page.html'))
app.get('/main.js', (req, res) => res.sendfile('src/main.js'))

//res.sendFile(path.join(__dirname + '/index.html'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


//app.get('/', (req, res) => res.sendFile(path.join((__dirname + '/src/main-page.html'))

// res.sendFile(path.join(__dirname + '/index.html'));
