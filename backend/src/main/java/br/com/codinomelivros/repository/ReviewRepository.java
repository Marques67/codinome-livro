package br.com.codinomelivros.repository;

import br.com.codinomelivros.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
