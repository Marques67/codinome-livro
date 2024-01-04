package br.com.codinomelivros.dto;

import br.com.codinomelivros.model.Assessment;

import javax.validation.constraints.NotBlank;
import java.io.Serializable;

public class AssessmentDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private Integer note;

    @NotBlank(message = "Campo requerido")
    private String opinion;

    @NotBlank(message = "Campo requerido")
    private String opinionAuthor;

    private Long bookId;

    public AssessmentDTO() {}

    public AssessmentDTO(Long id, Integer note, String opinion, String opinionAuthor) {
        this.id = id;
        this.note = note;
        this.opinion = opinion;
        this.opinionAuthor = opinionAuthor;
    }

    public AssessmentDTO(Assessment assessment) {
        this.id = assessment.getId();
        this.note = assessment.getNote();
        this.opinion = assessment.getOpinion();
        this.opinionAuthor = assessment.getOpinionAuthor();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getNote() {
        return note;
    }

    public void setNote(Integer note) {
        this.note = note;
    }

    public String getOpinion() {
        return opinion;
    }

    public void setOpinion(String opinion) {
        this.opinion = opinion;
    }

    public String getOpinionAuthor() {
        return opinionAuthor;
    }

    public void setOpinionAuthor(String opinionAuthor) {
        this.opinionAuthor = opinionAuthor;
    }

    public Long getBookId() {
        return bookId;
    }

    public void setBookId(Long bookId) {
        this.bookId = bookId;
    }
}
