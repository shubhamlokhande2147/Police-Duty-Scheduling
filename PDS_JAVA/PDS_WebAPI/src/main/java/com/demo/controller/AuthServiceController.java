//package com.demo.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.demo.service.IAuthService;
//
//@RestController
//@RequestMapping("/auth")
//@CrossOrigin(origins = "http://localhost:3000")
//public class AuthServiceController {
//
//
//	@Autowired
//	private IAuthService aservice;	
//
//    @PostMapping("/authenticate")
//    public ResponseEntity<String> authenticate(
//        @RequestParam("username") String username, 
//        @RequestParam("password") String password, 
//        @RequestParam("userType") String userType) {
//
//        if (aservice.authenticate(username, password, userType)) {
//            return ResponseEntity.ok("Authentication successful");
//        } else {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed");
//        }
//    }
//	
//}


//=============================

//
//package com.demo.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import com.demo.service.IAuthService;
//
//@RestController
//@RequestMapping("/auth")
//@CrossOrigin(origins = "http://localhost:3000")
//public class AuthServiceController {
//
//    @Autowired
//    private IAuthService aservice;  
//
//    @PostMapping("/authenticate")
//    public ResponseEntity<String> authenticate(
////        @RequestParam("username") String username,
//        @RequestParam(value = "username", required = false) String username,
//        @RequestParam(value = "password", required = false) String password, 
//        @RequestParam(value = "userType", required = false) String userType) {
//
//        // Check if all required parameters are provided
//        if (username == null || password == null || userType == null) {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Missing required parameters");
//        }
//        
//        // Check if the username parameter is missing
//        if (username == null || username.isEmpty()) {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
//                    .body("Missing required parameter: username");
//        }
//
//        // Perform authentication
//        if (aservice.authenticate(username, password, userType)) {
//            return ResponseEntity.ok("Authentication successful");
//        } else {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed");
//        }
//    }
//}


//====================================

package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.demo.service.IAuthService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthServiceController {

//    @Autowired
//    private IAuthService aservice;  
//
//    @PostMapping("/authenticate")
//    public ResponseEntity<String> authenticate(
//        @RequestParam(value = "username", required = false) String username,
//        @RequestParam(value = "password", required = false) String password, 
//        @RequestParam(value = "userType", required = false) String userType) {
//
////      
////      // Check if the username parameter is missing
////      if (username == null || username.isEmpty()) {
////          return ResponseEntity.status(HttpStatus.BAD_REQUEST)
////                  .body("Missing required parameter: username");
////      }
//    	
//        // Perform authentication only if all parameters are provided
//        if (username != null && password != null && userType != null) {
//            if (aservice.authenticate(username, password, userType)) {
//                return ResponseEntity.ok("Authentication successful");
//            } else {
//                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed");
//            }
//        } else {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Missing required parameters");
//        }
//    }
//    
//    
}
