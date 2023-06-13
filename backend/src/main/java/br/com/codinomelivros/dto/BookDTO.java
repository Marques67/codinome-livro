package br.com.codinomelivros.dto;

import br.com.codinomelivros.enums.LiteraryGenreEnum;
import br.com.codinomelivros.model.Assessment;
import br.com.codinomelivros.model.Book;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.HashSet;
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
    private LiteraryGenreEnum literaryGenreEnum;
    private Integer numberOfPages;
    private String publishingCompany;
    private String image;
    private Set<AssessmentDTO> assessments = new HashSet<>();

    public BookDTO() {}

    public BookDTO(Long id, String name, String description, String author, LiteraryGenreEnum literaryGenreEnumm,
                   Integer numberOfPages, String publishingCompany, String image) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.author = author;
        this.literaryGenreEnum = literaryGenreEnumm;
        this.numberOfPages = numberOfPages;
        this.publishingCompany = publishingCompany;
        this.image = image;
    }

    public BookDTO(Book book) {
        this.id = book.getId();
        this.name = book.getName();
        this.description = book.getDescription();
        this.author = book.getAuthor();
        this.literaryGenreEnum = book.getLiteraryGenreEnum();
        this.numberOfPages = book.getNumberOfPages();
        this.publishingCompany = book.getPublishingCompany();
        this.image = book.getImage();
    }

    public BookDTO(Book book, Set<Assessment> assessments) {
        this(book);
        assessments.forEach(assessment -> this.assessments.add(new AssessmentDTO(assessment)));
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

    public LiteraryGenreEnum getLiteraryGenreEnum() {
        return literaryGenreEnum;
    }

    public void setLiteraryGenreEnum(LiteraryGenreEnum literaryGenreEnum) {
        this.literaryGenreEnum = literaryGenreEnum;
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

    public Set<AssessmentDTO> getAssessments() {
        return assessments;
    }

    public void setAssessments(Set<AssessmentDTO> assessments) {
        this.assessments = assessments;
    }
}
