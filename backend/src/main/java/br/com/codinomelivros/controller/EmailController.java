package br.com.codinomelivros.controller;

import br.com.codinomelivros.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.util.UUID;

@RestController
@RequestMapping(value = "/email")
public class EmailController {

    @Autowired
    EmailService emailService;

    @PostMapping("/sending-email")
    public void solicitarRecuperacaoSenha(@RequestParam(value = "email") String email) throws MessagingException {
        emailService.sendEmail(email);
    }
}
