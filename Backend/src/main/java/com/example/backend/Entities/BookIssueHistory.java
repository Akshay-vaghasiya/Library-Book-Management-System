package com.example.backend.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookIssueHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "history_id")
    private Long hid;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Column(name = "issue_data")
    private Date issue_data;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Column(name = "due_date")
    private Date dueDate;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Column(name = "return_data")
    private Date return_data;

    @Column(name = "penalty", nullable = true)
    private float penalty = 0;

    @ManyToOne
    @JoinColumn(name = "book_id", nullable = false)
    @JsonBackReference(value = "book_history")
    private Books books;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @JsonBackReference(value = "user_history")
    private Users user;

}
