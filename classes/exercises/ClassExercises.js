// Define your Book class here:
class Book {
    constructor(title, author, copyright, isbn, pages, timeCheckedOut, discarded) {
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.isbn = isbn;
        this.pages = pages;
        this.timeCheckedOut = timeCheckedOut;
        this.discarded = discarded;
    }
    checkout(use = 1) {
        this.timeCheckedOut += use;
    }
}

// Define your Manual and Novel classes here:
class manual extends Book {
    constructor(title, author, copyright, isbn, pages, timeCheckedOut, discarded) {
        super(title, author, copyright, isbn, pages, timeCheckedOut, discarded)
    }
    dispose(currentYear) {
        if (currentYear - this.copyright > 5) {
            this.discarded = "Yes";
        }
    }
}
class novel extends Book {
    constructor(title, author, copyright, isbn, pages, timeCheckedOut, discarded) {
        super(title, author, copyright, isbn, pages, timeCheckedOut, discarded);
    }
    dispose() {
        if (this.timeCheckedOut > 100) {
            this.discarded = "Yes";
        }
    }
}
// Declare the objects for exercises 2 and 3 here:
let JanesBook = new novel("Pride and Prejudice", "Jane Austen", 1813, "1111111111111", 432, 32, "No")
let ShuttleBook = new manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, "No")
// Code exercises 4 & 5 here:
JanesBook.checkout(5)
ShuttleBook.dispose(2024)
console.log(JanesBook, ShuttleBook)