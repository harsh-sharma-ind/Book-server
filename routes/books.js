const express = require('express')

const {createBook, getBooks} = require('../controllers/bookController')
const router = express.Router()

router.post('/', getBooks);

//router.post('/', createBook);

module.exports = router;