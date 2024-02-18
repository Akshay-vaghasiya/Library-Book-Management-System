package com.example.backend.Services;

import com.example.backend.Entities.BooksInformation;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface BookInformationService {

    public BooksInformation saveBooksInformation(BooksInformation booksInformation);
    public void deleteBooksInformation(Long id);
    public List<BooksInformation> getAllBooksInformation();
    public BooksInformation getBooksInformationById(Long id);
}
