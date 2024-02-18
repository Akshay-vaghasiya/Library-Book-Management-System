package com.example.backend.Entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class BooksInformation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bookinfo_id")
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "author")
    private String author;

    @Column(name = "isbn", unique = true, nullable = false)
    private String isbn;

    @Column(name = "category")
    private String category;

    @Column(name = "stock")
    private Long stock= 0L;

    @Column(name = "available")
    private Long available= 0L;

    @Column(name = "image_url")
    private String image;

    @OneToMany(mappedBy = "booksInformation", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Books> books;

}