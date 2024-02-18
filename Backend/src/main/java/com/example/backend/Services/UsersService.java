package com.example.backend.Services;

import com.example.backend.Entities.Users;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
public interface UsersService {

    public Users saveUser(Users users);
    public void deleteUser(Long id);
    public List<Users> getAllUser();
    public Users getUserById(Long id);
}
