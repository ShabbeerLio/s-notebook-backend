const express = require('express')
var cors = require('cors')
const connectToMongo = require('./db');

connectToMongo();
const app = express()
const PORT = process.env.PORT || 8000;

app.use(cors())
app.use(express.json())


// Avialiable routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(PORT, () => {
    console.log(`S-Book backend listening on port ${PORT}`)
})
