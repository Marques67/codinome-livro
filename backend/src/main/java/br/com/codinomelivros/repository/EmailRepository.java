package br.com.codinomelivros.repository;

import br.com.codinomelivros.model.Email;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmailRepository extends JpaRepository<Email, Long> {
}
