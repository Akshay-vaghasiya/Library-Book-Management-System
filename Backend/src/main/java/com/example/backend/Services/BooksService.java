package com.example.backend.Services;

import com.example.backend.Entities.Books;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface BooksService {

    public Books saveBooks(Books books);
    public void deleteBooks(Long id);
    public List<Books> getAllBooks();
    public Books getBooksById(Long id);
}
