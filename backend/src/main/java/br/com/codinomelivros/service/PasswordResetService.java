package br.com.codinomelivros.service;

import br.com.codinomelivros.dto.PasswordResetDTO;
import br.com.codinomelivros.model.PasswordResetToken;
import br.com.codinomelivros.repository.PasswordResetRepository;
import br.com.codinomelivros.service.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
public class PasswordResetService {

    @Autowired
    PasswordResetRepository repository;

    @Autowired
    UserService userService;

    @Transactional
    public void updatePassword(PasswordResetDTO passwordResetDTO) {
        PasswordResetToken passwordResetToken = repository.findByToken(passwordResetDTO.getToken());

        if (passwordResetToken.getToken() == null || passwordResetToken.getExpiryDate().isBefore(LocalDateTime.now())) {
            throw new ResourceNotFoundException("Token invalid or expired.");
        }

        if (passwordResetToken.getUser().getEmail().equals(passwordResetDTO.getUsername())) {
            userService.updatePassword(passwordResetDTO.getUsername(), passwordResetDTO.getPassword());
        }
    }

    public void savePasswordReset(PasswordResetToken passwordResetToken) {
        repository.save(passwordResetToken);
    }
}
