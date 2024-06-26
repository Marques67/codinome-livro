package br.com.codinomelivros.service;

import br.com.codinomelivros.model.User;
import br.com.codinomelivros.repository.UserRepository;
import br.com.codinomelivros.service.exceptions.ForbiddenException;
import br.com.codinomelivros.service.exceptions.UnauthorizedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AuthService {

    @Autowired
    private UserRepository repository;

    @Transactional(readOnly = true)
    public User authenticated() {
        try {
            String username = SecurityContextHolder.getContext().getAuthentication().getName();
            return repository.findByEmail(username);
        } catch (Exception e) {
            throw new UnauthorizedException("Invalid user");
        }
    }
}
