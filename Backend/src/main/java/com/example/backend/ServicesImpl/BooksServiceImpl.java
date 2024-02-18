package com.example.backend.ServicesImpl;

import com.example.backend.Entities.Books;
import com.example.backend.Repository.BooksRepository;
import com.example.backend.Services.BooksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BooksServiceImpl implements BooksService {

    BooksRepository booksRepository;

    @Autowired
    public BooksServiceImpl(BooksRepository booksRepository) {
        this.booksRepository = booksRepository;
    }

    @Override
    public Books saveBooks(Books books) {
        booksRepository.save(books);
        return books;
    }

    @Override
    public void deleteBooks(Long id) {
        Books books = booksRepository.getReferenceById(id);
        booksRepository.delete(books);
    }

    @Override
    public List<Books> getAllBooks() {
        return booksRepository.findAll();
    }

    @Override
    public Books getBooksById(Long id) {
        return booksRepository.getReferenceById(id);
    }
}
