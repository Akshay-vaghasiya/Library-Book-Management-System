package com.example.backend.Repository;

import com.example.backend.Entity.BookIssueHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookIssueHistoryRepository extends JpaRepository<BookIssueHistory,Long> {
}
