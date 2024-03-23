package br.com.codinomelivros.controller;

import br.com.codinomelivros.dto.BookDTO;
import br.com.codinomelivros.dto.ReviewDTO;
import br.com.codinomelivros.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping(value = "/reviews")
public class ReviewController {

    @Autowired
    private ReviewService service;

    //@PreAuthorize("hasAnyRole('MEMBER')")
    @PostMapping()
    public ResponseEntity<BookDTO> insertReview(@Valid @RequestBody ReviewDTO reviewDTO) {
        BookDTO bookDTO = service.insertNewReview(reviewDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(reviewDTO.getId()).toUri();
        return ResponseEntity.created(uri).body(bookDTO);
    }
}
