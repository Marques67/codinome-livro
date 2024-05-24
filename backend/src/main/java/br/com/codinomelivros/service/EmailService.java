package br.com.codinomelivros.service;

import br.com.codinomelivros.model.PasswordResetToken;
import br.com.codinomelivros.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class EmailService {

    @Autowired
    JavaMailSender emailSender;

    @Autowired
    UserService userService;
    
    @Autowired
    PasswordResetService passwordResetService;

    @Transactional
    public void sendEmail(String email) throws MessagingException {
        User user = userService.findByEmail(email);
        if (user != null) {
            String tokenResetPassword = UUID.randomUUID().toString();
            PasswordResetToken passwordResetToken = new PasswordResetToken(tokenResetPassword, user, LocalDateTime.now().plusHours(1));
            passwordResetService.savePasswordReset(passwordResetToken);

            String content = getButtonResetPassword(tokenResetPassword);

            MimeMessage message = emailSender.createMimeMessage();
            MimeMessageHelper mimeMessage = new MimeMessageHelper(message, true);
            mimeMessage.setTo(email);
            mimeMessage.setSubject("Recuperação de Senha");
            mimeMessage.setText(content, true);

            emailSender.send(message);
        }
    }

    private static String getButtonResetPassword(String tokenResetPassword) {
        String resetPasswordUrl = "http://localhost:3000/admin/auth/recover/resetPassword?token=" + tokenResetPassword;
        String button = "<!DOCTYPE html>" +
                "<html>" +
                "<head>" +
                "<style>" +
                ".button {" +
                "background-color: #18788f;" +
                "border: none;" +
                "color: white;" +
                "padding: 15px 32px;" +
                "text-align: center;" +
                "text-decoration: none;" +
                "display: inline-block;" +
                "font-size: 16px;" +
                "margin: 4px 2px;" +
                "cursor: pointer;" +
                "border-radius: 4px;" +
                "}" +
                "</style>" +
                "</head>" +
                "<body>" +
                "<h2>Redefinição de Senha</h2>" +
                "<p>Para redefinir sua senha, clique no botão abaixo:</p>" +
                "<a href=\"" + resetPasswordUrl + "\" class=\"button\">Redefinir Senha</a>" +
                "<p>Se você não solicitou essa redefinição, ignore este e-mail.</p>" +
                "</body>" +
                "</html>";

        return button;
    }
}
