package br.com.codinomelivros.service;

import br.com.codinomelivros.dto.RoleDTO;
import br.com.codinomelivros.dto.UserDTO;
import br.com.codinomelivros.dto.UserInsertDTO;
import br.com.codinomelivros.dto.UserUpdateDTO;
import br.com.codinomelivros.model.Role;
import br.com.codinomelivros.model.User;
import br.com.codinomelivros.repository.RoleRepository;
import br.com.codinomelivros.repository.UserRepository;
import br.com.codinomelivros.service.exceptions.DataBaseException;
import br.com.codinomelivros.service.exceptions.ResourceNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService implements UserDetailsService {

    private static Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository repository;

    @Autowired
    private RoleRepository roleRepository;

    @Transactional(readOnly = true)
    public Page<UserDTO> findAllPaged(Pageable pageable) {
        Page<User> list = repository.findAll(pageable);
        return list.map(x -> new UserDTO(x));
    }

    @Transactional(readOnly = true)
    public UserDTO findById(Long id) {
        Optional<User> obj = repository.findById(id);
        User user = obj.orElseThrow(() -> new ResourceNotFoundException("User not found"));
        return new UserDTO(user);
    }

    @Transactional(readOnly = true)
    public User findByEmail(String email) {
        return repository.findByEmail(email);
    }

    @Transactional
    public UserDTO insert(UserInsertDTO dto) {
        User user = new User();

        copyDtoToEntity(dto, user);
        user.setPassword(passwordEncoder.encode(dto.getPassword()));
        user = repository.save(user);

        return new UserDTO(user);
    }

    @Transactional
    public UserDTO update(Long id, UserUpdateDTO userDTO) {
        try {
            User user = repository.getOne(id);
            copyDtoToEntity(userDTO, user);
            user = repository.save(user);
            return new UserDTO(user);
        }
        catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("Id " + id + " not found");
        }
    }

    @Transactional
    public void updatePassword(String email, String password) {
        User user = repository.findByEmail(email);
        user.setPassword(passwordEncoder.encode(password));
        user = repository.save(user);
    }

    public void delete(Long id) {
        try {
            repository.deleteById(id);
        }
        catch (EmptyResultDataAccessException e) {
            throw new ResourceNotFoundException("Id " + id + " not found");
        }
        catch (DataIntegrityViolationException e) {
            throw new DataBaseException("Integrity violation");
        }
    }

    public void copyDtoToEntity(UserDTO dto, User entity) {
        entity.setFirstName(dto.getFirstName());
        entity.setLastName(dto.getLastName());
        entity.setEmail(dto.getEmail());

        entity.getRoles().clear();
        for (RoleDTO roleDTO : dto.getRoles()) {
            Role role = roleRepository.getOne(roleDTO.getId());
            entity.getRoles().add(role);
        }
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = repository.findByEmail(username);
        if (user == null) {
            logger.error("User not found: " + username);
            throw new UsernameNotFoundException("Email not found");
        }
        logger.info("User found: " + username);
        return user;
    }
}
