package com.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Activity;
import com.demo.model.Login;
import com.demo.model.Police;

import com.demo.service.IAdminService;
import com.demo.service.IAttendance_MasterService;
import com.demo.service.ILoginService;
import com.demo.service.IPoliceService;
import com.demo.dao.ILoginDao;



@RestController
@RequestMapping("/log")
@CrossOrigin(origins = "*")
public class LoginController {


	@Autowired
	private ILoginService lservice;
	
	@Autowired
     private ILoginDao ldao;
	
	@Autowired
    private IAdminService aservice;
	
	@Autowired
    private IAttendance_MasterService amservice;
	
	@Autowired
    private IPoliceService pservice;
	
	
//	@GetMapping("/getallactivities")
//	public ResponseEntity<String> loginmethod(@RequestBody Login login) {
//		
//		int role_id = ldao.getRoleId(login.getUsername(), login.getPassword());
//		
//	}	
	
//	
//	@PostMapping("/login")
//    public ResponseEntity<String> loginMethod(@RequestBody Login login) {
//        System.out.println(login.getUsername()+login.getPassword());
//            int roleId = ldao.getRoleId(login.getUsername(), login.getPassword());
//            // Perform additional authentication or authorization logic here if needed
//            System.out.println(roleId);
//            if(roleId == 1)
//            {
//            
//               String msg = aservice.loginAdmin(login);
//               return ResponseEntity.ok("Message " + msg);
//               //return ResponseEntity.ok("Login successful. Role ID: " + roleId);
//
//            }
//            else if(roleId == 2)
//            {
//            	String msg =  amservice.loginam_master(login); 
//                return ResponseEntity.ok("Message " + msg);
//                
//            }
//            else if(roleId == 3)
//            {
//            	String msg = pservice.loginPolice(login);
//                return ResponseEntity.ok("Message " + msg);
//                
//            }
//            else
//            {
//                //return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
//                   // return "Invalid credentials";
//                    return ResponseEntity.ok("Invalid");
//            }
//   
//    }
	
	@PostMapping("/login")
	public ResponseEntity<Object> loginMethod(@RequestBody Login login) {
	    System.out.println(login.getUsername() + login.getPassword());
	    int roleId = ldao.getRoleId(login.getUsername(), login.getPassword());
	    // Perform additional authentication or authorization logic here if needed
	    System.out.println(roleId);
	    if (roleId == 1) {
	        String msg = aservice.loginAdmin(login);
	        return ResponseEntity.ok().body(Map.of("message", msg, "roleId", roleId));
	    } else if (roleId == 2) {
	        String msg = amservice.loginam_master(login);
	        return ResponseEntity.ok().body(Map.of("message", msg, "roleId", roleId));
	    } else if (roleId == 3) {
	    	String msg = pservice.loginPolice(login);
	    	int pid = ldao.findPidByUsernameAndPassword(login.getUsername(), login.getPassword());
	    	System.out.println("pidddd ===  " + pid);
	        return ResponseEntity.ok().body(Map.of("message", msg, "roleId", roleId,"pid", pid));
	    } else {
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", "Invalid credentials"));
	    }
	}

	
}
