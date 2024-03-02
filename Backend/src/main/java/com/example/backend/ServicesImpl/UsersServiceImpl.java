package com.example.backend.ServicesImpl;

import com.example.backend.Entities.Roles;
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

    @Override
    public Users getUserByEmail(String email) {
        List<Users> users = usersRepository.findAll();

        for(Users user : users)
        {
            if(user.getEmail().equals(email))
            {
                return user;
            }
        }

        return null;
    }

    @Override
    public String checkAdminLoginDetail(Users users) {

        Users users1 = getUserByEmail(users.getEmail());

        if(users1 == null)
        {
            return "This user is not exist";
        }
        else {
            if(users1.getPassword().equals(users.getPassword()))
            {
                List<Roles> roles = users1.getRoles();

                for(Roles role : roles)
                {
                    if(role.getRole().equals("ADMIN"))
                    {
                        return "Admin Successfully Login";
                    }
                }

                return "This user is not an Admin";
            }
            else
            {
                return "Please enter correct password";
            }
        }

    }

    @Override
    public String checkUserLoginDetail(Users users) {

        Users users1 = getUserByEmail(users.getEmail());

        if(users1 == null)
        {
            return "This user is not exist";
        }
        else {
            if(users1.getPassword().equals(users.getPassword()))
            {
                List<Roles> roles = users1.getRoles();

                for(Roles role : roles)
                {
                    if(role.getRole().equals("USER"))
                    {
                        return "User Successfully Login";
                    }
                }

                return "This user is an Admin";
            }
            else
            {
                return "Please enter correct password";
            }
        }

    }
}
