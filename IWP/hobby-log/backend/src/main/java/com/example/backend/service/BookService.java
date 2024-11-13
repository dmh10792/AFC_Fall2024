package com.example.backend.service;

import com.example.backend.entity.Book;
import com.example.backend.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public Book save(Book book) {
        return bookRepository.save(book);
    }

    public HttpStatus delete(Long id) {
        Book book = bookRepository.findById(id).get();
        bookRepository.delete(book);
        return HttpStatus.OK;
    }

    public List<Book> getAll() {
        return bookRepository.findAll();
    }

    public Book updateBook(Book newBook, Long id) {
        Book book = bookRepository.findById(id).get();
        book.setStatus(newBook.getStatus());
        book.setPage(newBook.getPage());
        book.setLast_date(newBook.getLast_date());
        return bookRepository.save(book);
    }
}
