const Book = require('../models/bookModel')


//get all books
const getBooks = async (req, res) => {
    const books = await Book.find({});

    const {gender, age} = req.body;

    

    if(gender === "" || age === ""){
        return res.status(400).json("Please enter your age");
    }

    var g;
    

    if(gender === "Female"){
        g=0;
    }
    else{
        g=1;
    }

    var mini = 1000;
    var book_name;

    books.map(book => {
        var sum = 0;
        if(book.gender === "Female"){
            sum = Math.abs(g-0);
        }
        else{
            sum = Math.abs(g-1);
        }

        sum = sum + Math.abs(book.age - age);

        if(sum < mini){
            mini = sum;
            book_name = book.title;
        }

    })

    res.status(200).json(book_name);
}

//create a new book
/*const createBook = async (req, res) => {

    const {title, gender, age} = req.body;

    try{
        const book = await Book.create({title, gender, age})
        res.status(200).json(book);
    }catch (error) {
        res.status(404).json({err: error.message});
    }
} */


module.exports = {
   // createBook,
    getBooks
}