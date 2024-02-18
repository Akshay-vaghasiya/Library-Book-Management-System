package com.example.backend.Service;

import com.example.backend.Entity.BooksInformation;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface BookInformationService {

    public BooksInformation saveBooksInformation(BooksInformation booksInformation);
    public void deleteBooksInformation(Long id);
    public List<BooksInformation> getAllBooksInformation();
    public BooksInformation getBooksInformationById(Long id);
}
