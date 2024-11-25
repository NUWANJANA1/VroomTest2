package com.example.VehicleManagement.controller;

import com.example.VehicleManagement.Service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private final UserService userService = UserService.getInstance();
    
    @GetMapping("/users/{id}")
    public String getUserDetails(@PathVariable int id) {
        return userService.getUserDetails(id);
    }
}

