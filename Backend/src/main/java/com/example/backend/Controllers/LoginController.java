package com.example.backend.Controllers;

import com.example.backend.Entities.Users;
import com.example.backend.Services.UsersService;
import com.example.backend.ServicesImpl.UsersServiceImpl;
import com.example.backend.payload.LoginDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class LoginController {

    @Autowired
    private UsersService usersService;

    @PostMapping(value = "/adminlogin")
    public ResponseEntity<?> checkLogin(@RequestBody Users users)
    {
        return ResponseEntity.ok(this.usersService.checkAdminLoginDetail(users));
    }

    @PostMapping(value = "/adminregister")
    public ResponseEntity<?> registerAdmin(@RequestBody Users users)
    {
        return ResponseEntity.ok(this.usersService.saveUserasAdmin(users));
    }

    @PostMapping(value = "/userlogin")
    public ResponseEntity<?> userLogin(@RequestBody Users users)
    {
        return ResponseEntity.ok(this.usersService.checkUserLoginDetail(users));
    }

    @PostMapping(value = "/userregister")
    public ResponseEntity<?> registerUser(@RequestBody LoginDto loginDto)
    {
        return ResponseEntity.ok(this.usersService.saveUserasUser(loginDto));
    }
}
