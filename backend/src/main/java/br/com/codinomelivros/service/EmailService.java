package br.com.codinomelivros.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class EmailService {

    @Autowired
    JavaMailSender emailSender;

    @Transactional
    public void sendEmail(String email, String tokenResetPassword) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("Recuperação de Senha");

        String linkResetPassword = "http://localhost:8080/auth/recover/resetPassword" + tokenResetPassword;
        String textEmail = String.format(
                "Olá,\n\n" +
                        "Recebemos uma solicitação para redefinir sua senha. " +
                        "Clique no link abaixo para criar uma nova senha:\n" +
                        "%s\n\n" +
                        "Se você não solicitou a redefinição de senha, por favor ignore este e-mail.\n\n" +
                        "Atenciosamente,\n" +
                        "Codinome Geek",
                linkResetPassword
        );

        message.setText(textEmail);

        emailSender.send(message);
    }
}
