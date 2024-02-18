package com.example.backend.ServicesImpl;

import com.example.backend.Entities.Users;
import com.example.backend.Repository.UsersRepository;
import com.example.backend.Services.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersServiceImpl implements UsersService {

    UsersRepository usersRepository;

    @Autowired
    public UsersServiceImpl(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    @Override
    public Users saveUser(Users users) {
        usersRepository.save(users);
        return users;
    }

    @Override
    public void deleteUser(Long id) {
        Users users = usersRepository.getReferenceById(id);
        usersRepository.delete(users);
    }

    @Override
    public List<Users> getAllUser() {
        return usersRepository.findAll();
    }

    @Override
    public Users getUserById(Long id) {
        return usersRepository.getReferenceById(id);
    }
}
