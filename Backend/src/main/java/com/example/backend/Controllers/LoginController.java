package com.example.backend.Controllers;

import com.example.backend.Entities.Users;
import com.example.backend.Services.UsersService;
import com.example.backend.ServicesImpl.UsersServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
@CrossOrigin("*")
public class LoginController {

    @Autowired
    private UsersService usersService;

    @PostMapping(value = "/adminlogin")
    public ResponseEntity<?> checkLogin(@RequestBody Users users)
    {
        return ResponseEntity.ok(this.usersService.checkAdminLoginDetail(users));
    }

    @PostMapping(value = "/userlogin")
    public ResponseEntity<?> userLogin(@RequestBody Users users)
    {
        return ResponseEntity.ok(this.usersService.checkUserLoginDetail(users));
    }
}
