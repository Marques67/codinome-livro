package br.com.codinomelivros.repository;

import br.com.codinomelivros.model.PasswordResetToken;
import br.com.codinomelivros.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PasswordResetRepository extends JpaRepository<PasswordResetToken, Long> {

    PasswordResetToken findByToken(String token);
}
