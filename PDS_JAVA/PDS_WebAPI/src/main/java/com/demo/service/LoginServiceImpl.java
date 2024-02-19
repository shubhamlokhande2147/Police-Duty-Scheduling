package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.ILoginDao;
import com.demo.model.Login;

@Service
public class LoginServiceImpl implements ILoginService {
	
	@Autowired
	private ILoginDao ldao;
	
//     	    @Override
//			public Login checkUser(String uname, String passwd) {
//					
//				Login user =  ldao.validateUser(uname, passwd);
//				System.out.println(user);
//				
//				if (user == null || !user.getPassword().equals(passwd)) {
//			        return null;
//			    }
//				else return user;
//			}
     	    
     		public Login savelog(Login login)
     		{
     			return ldao.save(login);
     		}
			

}
