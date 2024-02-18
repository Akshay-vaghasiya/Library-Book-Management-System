package com.example.backend.Service;

import com.example.backend.Entity.BookIssueHistory;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface BookIssueHistoryService {

    public BookIssueHistory saveBookIssueHistory(BookIssueHistory bookIssueHistory);
    public void deleteBookIssueHistory(Long id);
    public List<BookIssueHistory> getAllBookIssueHistory();
    public BookIssueHistory getBookIssueHistoryById(Long id);
}
