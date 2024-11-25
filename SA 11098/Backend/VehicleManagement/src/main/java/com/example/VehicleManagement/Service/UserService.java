package com.example.VehicleManagement.Service;

public class UserService {

    private static UserService instance;

    private UserService() {

    }

    public static synchronized UserService getInstance() {
        if (instance == null) {
            instance = new UserService();
        }
        return instance;
    }


    public String getUserDetails(int userId) {

        return "User details for user ID: " + userId;
    }
}
