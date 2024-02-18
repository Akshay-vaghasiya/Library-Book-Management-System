package com.example.backend.Service;

import com.example.backend.Entity.Users;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
public interface UserService {

    public Users saveUser(Users users);
    public void deleteUser(Long id);
    public List<Users> getAllUser();
    public Users getUserById(Long id);
}
