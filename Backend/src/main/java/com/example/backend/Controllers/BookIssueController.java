package com.example.backend.Controllers;

import com.example.backend.Entities.BookIssueHistory;
import com.example.backend.Services.BookIssueHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/issue")
@CrossOrigin("*")
public class BookIssueController {

    @Autowired
    BookIssueHistoryService bookIssueHistoryService;

    @PostMapping(value = "/bookissue/{id}/{bid}/{uid}")
    public ResponseEntity<?> bookissue(@RequestBody BookIssueHistory bookIssueHistory, @PathVariable Long id, @PathVariable Long bid, @PathVariable Long uid)
    {
        return ResponseEntity.ok(this.bookIssueHistoryService.saveBookIssueHistory(bookIssueHistory, id, bid, uid));
    }
}