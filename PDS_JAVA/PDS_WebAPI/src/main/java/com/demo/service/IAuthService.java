package com.demo.service;

import org.springframework.stereotype.Service;

@Service
public interface IAuthService {
	
    public boolean authenticate(String username, String password, String userType);
    


}
