package br.com.codinomelivros.model;

import br.com.codinomelivros.enums.LiteraryGenreEnum;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@Table(name = "tb_book")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String author;

    @Enumerated(EnumType.STRING)
    private LiteraryGenreEnum literaryGenreEnum;

    private Integer numberOfPages;

    private String publishingCompany;

    private String image;

    @OneToMany(mappedBy = "book", cascade = {CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.REMOVE, CascadeType.REFRESH}, orphanRemoval = true)
    private Set<Assessment> assessments = new HashSet<>();

    public Book() {};

    public Book(Long id, String name, String description, String author,
                LiteraryGenreEnum literaryGenreEnum, Integer numberOfPages,
                String publishingCompany, String image, Set<Assessment> assessments) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.author = author;
        this.literaryGenreEnum = literaryGenreEnum;
        this.numberOfPages = numberOfPages;
        this.publishingCompany = publishingCompany;
        this.image = image;
        this.assessments = assessments;
    }
}
