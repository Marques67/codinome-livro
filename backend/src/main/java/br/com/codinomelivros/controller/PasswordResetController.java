package br.com.codinomelivros.controller;

import br.com.codinomelivros.dto.PasswordResetDTO;
import br.com.codinomelivros.service.PasswordResetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping(value = "/passwordReset")
public class PasswordResetController {

    @Autowired
    PasswordResetService service;

    @PutMapping
    public void updatePassword(@Valid @RequestBody PasswordResetDTO passwordResetDTO) {
        service.updatePassword(passwordResetDTO);
    }
}
