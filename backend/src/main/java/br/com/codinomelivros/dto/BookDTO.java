package br.com.codinomelivros.dto;

import br.com.codinomelivros.enums.LiteraryGenreEnum;
import br.com.codinomelivros.model.Review;
import br.com.codinomelivros.model.Book;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class BookDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;

    @Size(min = 5, max = 60, message = "Deve ter  entre 5 e 60 caracteres")
    @NotBlank(message = "Campo requerido")
    private String name;

    @NotBlank(message = "Campo requerido")
    private String description;

    @NotBlank(message = "Campo requerido")
    private String author;
    private Set<GenreDTO> literaryGenreEnumSet = new HashSet<>();
    private Integer numberOfPages;
    private String publishingCompany;
    private String image;
    private List<ReviewDTO> reviews = new ArrayList<>();
    private Integer countReview;
    private Double score;

    public BookDTO() {}

    public BookDTO(Long id, String name, String description, String author, Integer numberOfPages,
                   String publishingCompany, String image, Integer countReview, Double score) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.publishingCompany = publishingCompany;
        this.image = image;
        this.countReview = countReview;
        this.score = score;
    }

    public BookDTO(Book book) {
        this.id = book.getId();
        this.name = book.getName();
        this.description = book.getDescription();
        this.author = book.getAuthor();
        this.numberOfPages = book.getNumberOfPages();
        this.publishingCompany = book.getPublishingCompany();
        this.image = book.getImage();
        this.countReview = book.getReviews().size();
        this.score = book.getScore();

        Set<GenreDTO> genre = new HashSet<>();
        book.getLiteraryGenreEnumSet().forEach(genreSet -> {
            GenreDTO genreDTO = new GenreDTO(genreSet);
            genre.add(genreDTO);
        });

        this.literaryGenreEnumSet = genre;
    }

    public BookDTO(Book book, Set<Review> reviews, Set<LiteraryGenreEnum> literaryGenreEnums) {
        this(book);
        reviews.forEach(review -> this.reviews.add(new ReviewDTO(review)));
        literaryGenreEnums.forEach(genre -> this.literaryGenreEnumSet.add(new GenreDTO(genre)));
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Set<GenreDTO> getLiteraryGenreEnumSet() {
        return literaryGenreEnumSet;
    }

    public void setLiteraryGenreEnumSet(Set<GenreDTO> literaryGenreEnumSet) {
        this.literaryGenreEnumSet = literaryGenreEnumSet;
    }

    public Integer getNumberOfPages() {
        return numberOfPages;
    }

    public void setNumberOfPages(Integer numberOfPages) {
        this.numberOfPages = numberOfPages;
    }

    public String getPublishingCompany() {
        return publishingCompany;
    }

    public void setPublishingCompany(String publishingCompany) {
        this.publishingCompany = publishingCompany;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public List<ReviewDTO> getReviews() {
        return reviews;
    }

    public void setReviews(List<ReviewDTO> reviews) {
        this.reviews = reviews;
    }

    public Integer getCountReview() {
        return countReview;
    }

    public void setCountReview(Integer countReview) {
        this.countReview = countReview;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }
}
