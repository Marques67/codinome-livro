package br.com.codinomelivros.controller;

import br.com.codinomelivros.dto.BookDTO;
import br.com.codinomelivros.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping(value = "/books")
public class BookController {

    @Autowired
    private BookService service;

    @GetMapping
    public ResponseEntity<Page<BookDTO>> findAll(@RequestParam(value = "literaryGenreEnum", defaultValue = "NONE") String literaryGenre,
                                                    @RequestParam(value = "name", defaultValue = "") String name,
                                                    Pageable pageable) {
        Page<BookDTO> list = service.findAllPaged(literaryGenre.trim(), name.trim(), pageable);
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<BookDTO> findById(@PathVariable Long id) {
        BookDTO book = service.findById(id);
        return ResponseEntity.ok().body(book);
    }

    @PostMapping
    public ResponseEntity<BookDTO> insertNewBook(@RequestBody BookDTO bookDTO) {
        bookDTO = service.insertNewBook(bookDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(bookDTO.getId()).toUri();
        return ResponseEntity.created(uri).body(bookDTO);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<BookDTO> updateBook(@PathVariable Long id, @RequestBody BookDTO bookDTO) {
        bookDTO = service.updateBook(id, bookDTO);
        return ResponseEntity.ok().body(bookDTO);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable Long id) {
        service.deleteBook(id);
        return ResponseEntity.noContent().build();
    }
}
