package com.demo.service;

import java.sql.*;

import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements IAuthService{
	
	private static final String URL = "jdbc:mysql://localhost:3306/secure_shift_nexus_db";
    private static final String USERNAME = "root";
    private static final String PASSWORD = "Shubham@2147";
    
    
    public boolean authenticate(String username, String password, String userType) {
        String query = "SELECT username,password FROM " + userType + " WHERE username = ? AND password = ?";
        try (Connection conn = DriverManager.getConnection(URL, USERNAME, PASSWORD);
             PreparedStatement statement = conn.prepareStatement(query)) {
            statement.setString(1, username);
            statement.setString(2, password);
            try (ResultSet resultSet = statement.executeQuery()) {
                return resultSet.next();
            }
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }


}
