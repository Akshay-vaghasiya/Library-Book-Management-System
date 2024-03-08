package com.example.backend.ServicesImpl;

import com.example.backend.Entities.Roles;
import com.example.backend.Entities.Users;
import com.example.backend.Repository.RolesRepository;
import com.example.backend.Repository.UsersRepository;
import com.example.backend.Services.UsersService;
import com.example.backend.payload.LoginDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.management.relation.Role;
import java.util.ArrayList;
import java.util.List;

@Service
public class UsersServiceImpl implements UsersService {

    UsersRepository usersRepository;

    RolesRepository rolesRepository;

    @Autowired
    public UsersServiceImpl(UsersRepository usersRepository, RolesRepository rolesRepository) {
        this.usersRepository = usersRepository;
        this.rolesRepository = rolesRepository;
    }

    @Override
    public String saveUserasUser(LoginDto users) {

        Users users1 = new Users();
        users1.setName(users.getName());
        users1.setEmail(users.getEmail());
        users1.setPassword(users.getPassword());
        Roles roles = rolesRepository.getReferenceById(2L);

        List<Roles> roles1 = users1.getRoles();
        if(roles1 == null) {
            roles1 = new ArrayList<>();
        }
        roles1.add(roles);

        users1.setRoles(roles1);

        usersRepository.save(users1);

        return "User register successfully";
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

    @Override
    public String saveUserasAdmin(Users users) {

        Roles roles = rolesRepository.getReferenceById(1L);

        List<Roles> roles1 = users.getRoles();

        if(roles1 == null)
        {
            roles1 = new ArrayList<>();
        }
        roles1.add(roles);

        users.setRoles(roles1);

        usersRepository.save(users);

        return "Admin register successfully";
    }
}
