package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Login;
import com.demo.service.ILoginService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {


	@Autowired
	private ILoginService lservice;
	
	
	
}
