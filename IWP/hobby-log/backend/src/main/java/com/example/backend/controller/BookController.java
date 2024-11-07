package com.example.backend.controller;

import com.example.backend.entity.Book;
import com.example.backend.service.BookService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/book")
public class BookController {

    final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @PostMapping
    public ResponseEntity<Book> createBook(@RequestBody Book book) {
        return ResponseEntity.ok(bookService.save(book));
    }

    @DeleteMapping("/{bookId}")
    public ResponseEntity<HttpStatus> deleteBook(@PathVariable Long bookId) {
        return ResponseEntity.ok(bookService.delete(bookId));
    }

    @GetMapping
    public ResponseEntity<List<Book>> getAllBooks() {
        return ResponseEntity.ok(bookService.getAll());
    }

}
