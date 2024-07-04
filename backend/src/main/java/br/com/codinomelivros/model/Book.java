package br.com.codinomelivros.model;

import br.com.codinomelivros.enums.LiteraryGenreEnum;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "tb_book")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String author;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "book_genre", joinColumns = @JoinColumn(name = "book_id"))
    @Enumerated(EnumType.STRING)
    private Set<LiteraryGenreEnum> literaryGenreEnumSet = new HashSet<>();

    private Integer numberOfPages;

    private String publishingCompany;

    private String image;

    @OneToMany(mappedBy = "id.book", cascade = {CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.REMOVE, CascadeType.REFRESH}, orphanRemoval = true, fetch = FetchType.EAGER)
    private Set<Review> reviews = new HashSet<>();

    private Double score;

    public Book() {};

    public Book(Long id, String name, String description, String author,
                Set<LiteraryGenreEnum> literaryGenreEnumSet, Integer numberOfPages,
                String publishingCompany, String image, Set<Review> reviews, Double score) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.author = author;
        this.literaryGenreEnumSet = literaryGenreEnumSet;
        this.numberOfPages = numberOfPages;
        this.publishingCompany = publishingCompany;
        this.image = image;
        this.reviews = reviews;
        this.score = score;
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

    public Set<LiteraryGenreEnum> getLiteraryGenreEnumSet() {
        return literaryGenreEnumSet;
    }

    public void setLiteraryGenreEnumSet(Set<LiteraryGenreEnum> literaryGenreEnumSet) {
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

    public Set<Review> getReviews() {
        return reviews;
    }

    public void setReviews(Set<Review> reviews) {
        this.reviews = reviews;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }
}
