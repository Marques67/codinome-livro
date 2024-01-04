package br.com.codinomelivros.service;

import br.com.codinomelivros.dto.BookDTO;
import br.com.codinomelivros.model.Book;
import br.com.codinomelivros.repository.BookRepository;
import br.com.codinomelivros.service.exceptions.DataBaseException;
import br.com.codinomelivros.service.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BookService {

    @Autowired
    private BookRepository repository;

    public List<BookDTO> findAll() {
        List<Book> books = repository.findAll();
        return books.stream().map(book -> new BookDTO(book)).collect(Collectors.toList());
    }

    public BookDTO findById(Long id) {
        Book book = findByBookId(id);
        return new BookDTO(book, book.getAssessments());
    }

    public Book findByBookId(Long id) {
        Optional<Book> bookOp = repository.findById(id);
        Book book = bookOp.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
        return book;
    }

    public BookDTO insertNewBook(BookDTO newBook) {
        Book book = copyDTOToEntity(newBook);
        book = repository.save(book);
        return new BookDTO(book);
    }

    public BookDTO updateBook(Long id, BookDTO bookDTO) {
        try {
            var book = repository.getReferenceById(id);
            book = copyDTOToEntity(bookDTO);
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

    public Book copyDTOToEntity(BookDTO dto) {
        Book book = new Book();
        book.setName(dto.getName());
        book.setDescription(dto.getDescription());
        book.setAuthor(dto.getAuthor());
        book.setLiteraryGenreEnum(dto.getLiteraryGenreEnum());
        book.setNumberOfPages(dto.getNumberOfPages());
        book.setPublishingCompany(dto.getPublishingCompany());
        book.setImage(dto.getImage());
        return book;
    }
}
