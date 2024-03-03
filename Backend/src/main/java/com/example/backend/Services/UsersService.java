package com.example.backend.Services;

import com.example.backend.Entities.Users;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
public interface UsersService {

    public String saveUserasUser(Users users);
    public void deleteUser(Long id);
    public List<Users> getAllUser();
    public Users getUserById(Long id);
    public Users getUserByEmail(String email);
    public String checkAdminLoginDetail(Users users);
    public String checkUserLoginDetail(Users users);
    public String saveUserasAdmin(Users users);
}
