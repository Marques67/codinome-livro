package br.com.codinomelivros.service;

import br.com.codinomelivros.dto.BookDTO;
import br.com.codinomelivros.dto.ReviewDTO;
import br.com.codinomelivros.model.Review;
import br.com.codinomelivros.model.Book;
import br.com.codinomelivros.repository.ReviewRepository;
import br.com.codinomelivros.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
public class ReviewService {

    @Autowired
    BookService bookService;

    public BookDTO insertNewReview(ReviewDTO reviewDTO) {
        Book book = bookService.updateCount(reviewDTO);
        return new BookDTO(book);
    }
}
