package br.com.codinomelivros.repository;

import br.com.codinomelivros.enums.LiteraryGenreEnum;
import br.com.codinomelivros.model.Book;
import br.com.codinomelivros.model.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

    @Query("SELECT DISTINCT obj FROM Book obj WHERE " +
            "(:literaryGenre IS NULL OR EXISTS " +
            "(SELECT 1 FROM obj.literaryGenreEnumSet genre WHERE genre = :literaryGenre)) AND " +
            "(LOWER(obj.name) LIKE LOWER(CONCAT('%',:name,'%')) )")
    Page<Book> find(LiteraryGenreEnum literaryGenre, String name, Pageable pageable);

    @Query("SELECT obj FROM Book obj JOIN FETCH obj.reviews WHERE obj IN :books")
    List<Book> findBooksWithReviews(List<Book> books);
}
