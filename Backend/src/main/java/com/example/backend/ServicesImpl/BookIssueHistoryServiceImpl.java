package com.example.backend.ServicesImpl;

import com.example.backend.Entities.*;
import com.example.backend.Repository.BookIssueHistoryRepository;
import com.example.backend.Repository.BooksInformationRepository;
import com.example.backend.Repository.BooksRepository;
import com.example.backend.Repository.UsersRepository;
import com.example.backend.Services.BookIssueHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BookIssueHistoryServiceImpl implements BookIssueHistoryService {

    BookIssueHistoryRepository bookIssueHistoryRepository;
    BooksInformationRepository booksInformationRepository;
    UsersRepository usersRepository;
    BooksRepository booksRepository;

    @Autowired
    public BookIssueHistoryServiceImpl(BookIssueHistoryRepository bookIssueHistoryRepository, BooksInformationRepository booksInformationRepository, UsersRepository usersRepository, BooksRepository booksRepository) {
        this.bookIssueHistoryRepository = bookIssueHistoryRepository;
        this.booksInformationRepository = booksInformationRepository;
        this.usersRepository = usersRepository;
        this.booksRepository = booksRepository;
    }

    @Override
    public String saveBookIssueHistory(BookIssueHistory bookIssueHistory, Long id, Long bid, Long uid) {

        Users users = usersRepository.getReferenceById(uid);
        List<Roles> roles = users.getRoles();

        if(users == null)
        {
            return "This User id is invalid";
        }

        for(Roles roles1 : roles)
        {
            if(roles1.getRole().equals("ADMIN"))
            {
                return "This user is admin, so book was not issued.";
            }
        }

        BooksInformation booksInformation = booksInformationRepository.getReferenceById(id);

        if(booksInformation == null)
        {
            return "This main book id is invalid";
        }

        booksInformation.setAvailable(booksInformation.getAvailable()-1);

        Books books = booksRepository.getReferenceById(bid);

        if(books == null)
        {
            return "This book id is invalid";
        }

        books.setStatus("not available");


        bookIssueHistory.setBooks(books);
        bookIssueHistory.setUser(users);

        bookIssueHistoryRepository.save(bookIssueHistory);

        return "Book Successfully issue";
    }

    @Override
    public void deleteBookIssueHistory(Long id) {
        BookIssueHistory bookIssueHistory = bookIssueHistoryRepository.getReferenceById(id);
        bookIssueHistoryRepository.delete(bookIssueHistory);
    }

    @Override
    public List<BookIssueHistory> getAllBookIssueHistory() {
        return bookIssueHistoryRepository.findAll();
    }

    @Override
    public BookIssueHistory getBookIssueHistoryById(Long id) {
        return bookIssueHistoryRepository.getReferenceById(id);
    }
}
