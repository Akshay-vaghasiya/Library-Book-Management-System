package com.example.backend.ServicesImpl;

import com.example.backend.Entities.BookIssueHistory;
import com.example.backend.Repository.BookIssueHistoryRepository;
import com.example.backend.Services.BookIssueHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BookIssueHistoryServiceImpl implements BookIssueHistoryService {

    BookIssueHistoryRepository bookIssueHistoryRepository;

    @Autowired
    public BookIssueHistoryServiceImpl(BookIssueHistoryRepository bookIssueHistoryRepository) {
        this.bookIssueHistoryRepository = bookIssueHistoryRepository;
    }

    @Override
    public BookIssueHistory saveBookIssueHistory(BookIssueHistory bookIssueHistory) {
        bookIssueHistoryRepository.save(bookIssueHistory);
        return bookIssueHistory;
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
