package com.example.backend.Controllers;

import com.example.backend.Entities.BooksInformation;
import com.example.backend.ServicesImpl.BookInformationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/book")
public class BookController {

    private BookInformationServiceImpl bookInformationService;

    @Autowired
    public BookController(BookInformationServiceImpl bookInformationService) {
        this.bookInformationService = bookInformationService;
    }

    @PostMapping(value = "/addbook")
    public ResponseEntity<?> addBook(@RequestBody BooksInformation booksInformation)
    {
        return ResponseEntity.ok(bookInformationService.saveBooksInformation(booksInformation));
    }


    @GetMapping("/getbooks")
    public ResponseEntity<?> getBooks()
    {
        return ResponseEntity.ok(this.bookInformationService.getAllBooksInformation());
    }

    @DeleteMapping("/deletebook/{bookId}")
    public ResponseEntity<?> deleteBook(@PathVariable Long bookId)
    {
        return ResponseEntity.ok(this.bookInformationService.deleteBooksInformation(bookId));
    }

    @PutMapping("/updatebook/{bookId}")
    public ResponseEntity<?> updateBook(@PathVariable Long bookId,@RequestBody BooksInformation booksInformation)
    {
        return ResponseEntity.ok(this.bookInformationService.updateBooksInfromation(booksInformation, bookId));
    }


}
