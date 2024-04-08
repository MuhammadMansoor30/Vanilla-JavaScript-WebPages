console.log("Libraray class Practice");

class Library{
    constructor(libName){
        this.libName = libName;
    }
    booklist =["ABC", "Alladin", "Wonderland"];

    getBookList(){
        console.log("The Books are: ");
        for(let i=0; i<this.booklist.length; i++){
            console.log(this.booklist[i]);
        }
    }
    addBook(bookName){
        this.booklist.push(bookName);
        console.log("Book Added Successfully");
        console.log(this.booklist);
    }
    borrowBook(bookName, personName){
        if(this.booklist.includes(bookName)){
            console.log(`${personName} has Borrowed ${bookName} book for 5 days`);
            return 1;
        }
        else{
            console.log(`Sorry! ${personName}, ${bookName} is not available`);
            return 0;
        }
    }
    returnBook(bookName){
        this.booklist.push(bookName);
        console.log("Book Returned Succesfully");
        console.log(this.booklist);
    }
}
let lib = new Library("Central Library");
lib.getBookList();
lib.addBook("Tom Sayer");
// lib.borrowBook("Wonderland", "Ahmed");
lib.borrowBook("Amf", "Ahmed");
lib.returnBook("Sandy");