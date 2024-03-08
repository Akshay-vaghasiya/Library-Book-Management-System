package com.example.backend.ServicesImpl;

import com.example.backend.Entities.*;
import com.example.backend.Repository.BookIssueHistoryRepository;
import com.example.backend.Repository.BooksInformationRepository;
import com.example.backend.Repository.BooksRepository;
import com.example.backend.Repository.UsersRepository;
import com.example.backend.Services.BookIssueHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.util.*;

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

        if(books.getStatus().equals("not available"))
        {
            return "This book already issued.";
        }

        books.setStatus("not available");


        bookIssueHistory.setBooks(books);
        bookIssueHistory.setUser(users);
        bookIssueHistory.setBookname(booksInformation.getTitle());
        bookIssueHistory.setBookid(booksInformation.getId());

        bookIssueHistoryRepository.save(bookIssueHistory);

        List<BookIssueHistory> bookIssueHistories = users.getBookIssueHistories();
        bookIssueHistories.add(bookIssueHistory);
        users.setBookIssueHistories(bookIssueHistories);

        return "Book Successfully issue";
    }

    @Override
    public void deleteBookIssueHistory(Long id) {
        BookIssueHistory bookIssueHistory = bookIssueHistoryRepository.getReferenceById(id);
        bookIssueHistoryRepository.delete(bookIssueHistory);
    }

    @Override
    public List<Map<String, Object>> getAllBookIssueHistory() {


       List<BookIssueHistory> bookIssueHistories = bookIssueHistoryRepository.findAll();
       List<Map<String, Object>> obj = new ArrayList<>();

       for(BookIssueHistory bookIssueHistory : bookIssueHistories)
       {
           Map<String, Object> m = new HashMap<>();

           if(bookIssueHistory.getReturn_date() != null)
           {

               LocalDate returndate = bookIssueHistory.getReturn_date().toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
               LocalDate duedate = bookIssueHistory.getDue_date().toInstant().atZone(ZoneId.systemDefault()).toLocalDate();

               long diff = ChronoUnit.DAYS.between(duedate,returndate);

               if(diff > 0 && bookIssueHistory.getPenalty() == 0f)
               {
                   bookIssueHistory.setPenalty(diff*20f);
                   bookIssueHistoryRepository.save(bookIssueHistory);
               }
           }
           m.put("book", bookIssueHistory.getBooks());
           m.put("user", bookIssueHistory.getUser());
           m.put("history", bookIssueHistory);

           obj.add(m);
       }

       return obj;

    }

    @Override
    public BookIssueHistory getBookIssueHistoryById(Long id) {
        return bookIssueHistoryRepository.getReferenceById(id);
    }

    @Override
    public String setreturnbook(Long hid) {

        BookIssueHistory bookIssueHistory = bookIssueHistoryRepository.getReferenceById(hid);

        Date currentDate = new Date();

        Books books = bookIssueHistory.getBooks();

        books.setStatus("available");

        bookIssueHistory.setBooks(books);

        BooksInformation booksInformation = booksInformationRepository.getReferenceById(bookIssueHistory.getBookid());

        booksInformation.setAvailable(booksInformation.getAvailable()+1);

        booksInformationRepository.save(booksInformation);

        bookIssueHistory.setReturn_date(currentDate);

        bookIssueHistoryRepository.save(bookIssueHistory);

        return "Successfully update return date";
    }
}
