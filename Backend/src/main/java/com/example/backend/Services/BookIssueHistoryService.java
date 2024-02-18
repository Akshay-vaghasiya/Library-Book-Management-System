package com.example.backend.Services;

import com.example.backend.Entities.BookIssueHistory;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface BookIssueHistoryService {

    public BookIssueHistory saveBookIssueHistory(BookIssueHistory bookIssueHistory);
    public void deleteBookIssueHistory(Long id);
    public List<BookIssueHistory> getAllBookIssueHistory();
    public BookIssueHistory getBookIssueHistoryById(Long id);
}
