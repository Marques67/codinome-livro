package br.com.codinomelivros.service;

import br.com.codinomelivros.dto.AssessmentDTO;
import br.com.codinomelivros.model.Assessment;
import br.com.codinomelivros.model.Book;
import br.com.codinomelivros.repository.AssessmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Objects;

@Service
public class AssessmentService {

    @Autowired
    BookService bookService;

    @Autowired
    AssessmentRepository repository;

    public AssessmentDTO insertNewAssessment(AssessmentDTO assessmentDTO) {
        Book book = bookService.findByBookId(assessmentDTO.getBookId());
        Assessment assessment = copyDTOToEntity(assessmentDTO, book);
        assessment = repository.save(assessment);
        return new AssessmentDTO(assessment);
    }

    public Assessment copyDTOToEntity(AssessmentDTO dto, Book book) {
        Assessment assessment = new Assessment();
        assessment.setNote(dto.getNote());
        assessment.setOpinion(dto.getOpinion());
        assessment.setOpinionAuthor(dto.getOpinionAuthor());
        assessment.setDate(Instant.now());
        assessment.setBook(book);
        return assessment;
    }
}
