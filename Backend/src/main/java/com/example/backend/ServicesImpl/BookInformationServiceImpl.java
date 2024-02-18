package com.example.backend.ServicesImpl;

import com.example.backend.Entities.BooksInformation;
import com.example.backend.Repository.BooksInformationRepository;
import com.example.backend.Services.BookInformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookInformationServiceImpl implements BookInformationService {

    BooksInformationRepository booksInformationRepository;

    @Autowired
    public BookInformationServiceImpl(BooksInformationRepository booksInformationRepository) {
        this.booksInformationRepository = booksInformationRepository;
    }

    @Override
    public BooksInformation saveBooksInformation(BooksInformation booksInformation) {
        booksInformationRepository.save(booksInformation);
        return booksInformation;
    }

    @Override
    public void deleteBooksInformation(Long id) {

        BooksInformation booksInformation = booksInformationRepository.getReferenceById(id);
        booksInformationRepository.delete(booksInformation);
    }

    @Override
    public List<BooksInformation> getAllBooksInformation() {

        return booksInformationRepository.findAll();
    }

    @Override
    public BooksInformation getBooksInformationById(Long id) {

        return booksInformationRepository.getReferenceById(id);
    }
}
