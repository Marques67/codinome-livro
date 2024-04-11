package br.com.codinomelivros.dto;

import br.com.codinomelivros.model.Review;

import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.math.BigDecimal;

public class ReviewDTO implements Serializable {
    private static final long serialVersionUID = 1L;
    private Double note;
    @NotBlank(message = "Campo requerido")
    private String opinion;

    private Long bookId;

    public ReviewDTO() {}

    public ReviewDTO(Review review) {
        this.note = review.getNote();
        this.opinion = review.getOpinion();
        this.bookId = review.getId().getBook().getId();
    }

    public Double getNote() {
        return note;
    }

    public void setNote(Double note) {
        this.note = note;
    }

    public String getOpinion() {
        return opinion;
    }

    public void setOpinion(String opinion) {
        this.opinion = opinion;
    }

    public Long getBookId() {
        return bookId;
    }

    public void setBookId(Long bookId) {
        this.bookId = bookId;
    }

}
