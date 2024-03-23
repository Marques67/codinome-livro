package br.com.codinomelivros.dto;

import br.com.codinomelivros.model.Review;

import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.math.BigDecimal;

public class ReviewDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private Double note;
    @NotBlank(message = "Campo requerido")
    private String opinion;

    private Long bookId;
    private UserDTO user;

    public ReviewDTO() {}

    public ReviewDTO(Long id, Double note, String opinion, UserDTO user) {
        this.id = id;
        this.note = note;
        this.opinion = opinion;
        this.user = user;
    }

    public ReviewDTO(Review review) {
        this.id = review.getId();
        this.note = review.getNote();
        this.opinion = review.getOpinion();
        this.user = new UserDTO(review.getUser());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }
}
