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

    @Autowired
    ReviewRepository repository;

    @Autowired
    private AuthService authService;

    public BookDTO insertNewReview(ReviewDTO reviewDTO) {
        Book book = bookService.findByBookId(reviewDTO.getBookId());
        Review review = copyDTOToEntity(reviewDTO, book);
        review = repository.save(review);
        book = bookService.updateCount(book);
        return new BookDTO(book);
    }

    public Review copyDTOToEntity(ReviewDTO dto, Book book) {
        Review review = new Review();
        review.setNote(dto.getNote());
        review.setOpinion(dto.getOpinion());
        review.setDate(Instant.now());
        review.setBook(book);
        review.setUser(authService.authenticated());
        return review;
    }
}
