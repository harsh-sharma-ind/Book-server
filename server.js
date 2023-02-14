const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const bookRoutes = require('./routes/books')
const app = express()

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.use('/api/books',bookRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(() => {

    app.listen(process.env.PORT, () => {
        console.log('connected to db and listening on port ', process.env.PORT);
    })

}).catch((error) => {
    console.log(error.message);
})

/* <label>Gender</label>
        <input
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
    "proxy": "http://localhost:4000",    
        */