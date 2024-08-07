package br.com.codinomelivros.service;

import br.com.codinomelivros.dto.BookDTO;
import br.com.codinomelivros.dto.ReviewDTO;
import br.com.codinomelivros.enums.LiteraryGenreEnum;
import br.com.codinomelivros.model.Book;
import br.com.codinomelivros.model.Review;
import br.com.codinomelivros.repository.BookRepository;
import br.com.codinomelivros.repository.ReviewRepository;
import br.com.codinomelivros.repository.UserRepository;
import br.com.codinomelivros.service.exceptions.DataBaseException;
import br.com.codinomelivros.service.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.time.Instant;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class BookService {

    @Autowired
    private BookRepository repository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthService authService;

    @Autowired
    private ReviewRepository reviewRepository;

    @Transactional(readOnly = true)
    public Page<BookDTO> findAllPaged(String literaryGenre, String name, Pageable pageable) {
        LiteraryGenreEnum literaryGenreEnum = LiteraryGenreEnum.valueOf(literaryGenre);
        String literaryGenreEnumName = literaryGenreEnum.getName();
        if (literaryGenreEnumName.equals("NONE")) {
            literaryGenreEnum = null;
        }
        Page<Book> page = repository.find(literaryGenreEnum, name, pageable);
        repository.findBooksWithReviews(page.getContent());
        return page.map(x -> new BookDTO(x, x.getReviews()));
    }

    @Transactional(readOnly = true)
    public BookDTO findById(Long id) {
        Book book = findByBookId(id);
        return new BookDTO(book, book.getReviews());
    }

    @Transactional(readOnly = true)
    public Book findByBookId(Long id) {
        Optional<Book> bookOp = repository.findById(id);
        Book book = bookOp.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
        return book;
    }

    @Transactional
    public BookDTO insertNewBook(BookDTO newBook) {
        Book book = new Book();
        copyDTOToEntity(newBook, book);
        book = repository.save(book);
        return new BookDTO(book);
    }

    @Transactional
    public BookDTO updateBook(Long id, BookDTO bookDTO) {
        try {
            var book = findByBookId(id);
            copyDTOToEntity(bookDTO, book);
            book = repository.save(book);
            return new BookDTO(book);
        } catch (EntityNotFoundException ex) {
            throw new ResourceNotFoundException("Id not found: " + id);
        }
    }

    public void deleteBook(Long id) {
        try {
            repository.deleteById(id);
        }
        catch (EmptyResultDataAccessException e) {
            throw new ResourceNotFoundException("Id not found: " + id);
        }
        catch (DataIntegrityViolationException e) {
            throw new DataBaseException("Integrity violation");
        }
    }

    public Book copyDTOToEntity(BookDTO dto, Book book) {
        book.setName(dto.getName());
        book.setDescription(dto.getDescription());
        book.setAuthor(dto.getAuthor());
        book.setNumberOfPages(dto.getNumberOfPages());
        book.setPublishingCompany(dto.getPublishingCompany());
        book.setImage(dto.getImage());

        Set<LiteraryGenreEnum>  literaryGenreEnumSet = new HashSet<>();
        if (!dto.getLiteraryGenreEnumSet().isEmpty()) {
            dto.getLiteraryGenreEnumSet().forEach(genre -> {
                String nameGenre = genre.getLiteraryGenreEnum();
                LiteraryGenreEnum literaryGenreEnum = LiteraryGenreEnum.valueOf(nameGenre);
                literaryGenreEnumSet.add(literaryGenreEnum);
            });
            book.setLiteraryGenreEnumSet(literaryGenreEnumSet);
        }

        return book;
    }

    public Book updateCount(ReviewDTO dto) {
        Book book = findByBookId(dto.getBookId());

        Review review = new Review();
        review.setOpinion(dto.getOpinion());
        review.setBook(book);
        review.setUser(authService.authenticated());
        review.setDate(Instant.now());
        review.setNote(dto.getNote());

        review = reviewRepository.saveAndFlush(review);

        double sum = 0.0;
        for (Review s : book.getReviews()) {
            sum = sum + s.getNote();
        }

        double avg = sum / book.getReviews().size();

        book.setScore(avg);

        book = repository.save(book);

        return book;
    }
}
