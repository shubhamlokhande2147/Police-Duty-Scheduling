package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Admin;
import com.demo.service.IAdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {
	

	@Autowired
	private IAdminService aservice;
	


	@GetMapping("/getalladmins")
	public ResponseEntity<List<Admin>> getalladmins() {
		return ResponseEntity.ok(aservice.getalladmin());
		
	}
	
	
	@GetMapping("/admins/{ac_id}")
	public ResponseEntity<Admin> getalladmins(@PathVariable int ad_id) {
		Admin p = aservice.getById(ad_id);
		if (p != null)
			return ResponseEntity.ok(p);
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

	
	
	@PostMapping("/add_admin/{ad_id}")
	public ResponseEntity<String> addpolice(@RequestBody Admin p) {

//		 // List<Police> policeList = pservice.findAll();
//		  List<Admin> policeList = aservice.getalladmin();
//
//         //Iterate through policeList and access the name of the associated Activity
//        for (Police police : policeList) {
//		  Activity activityName = police.getActivity();
//         System.out.println(activityName);
//        }
//                
        aservice.addnewadmin(p);
		return ResponseEntity.ok("Data added successfully");
	}

	@PutMapping("/update_admin/{ad_id}")
	public ResponseEntity<String> updateactivity(@RequestBody Admin p) {
		aservice.updateById(p);
		return ResponseEntity.ok("Data modified successfully");
	}

	@DeleteMapping("/delete_admin/{ad_id}")
	public ResponseEntity<String> deleteactivity(@PathVariable int ad_id) {
		aservice.deleteById(ad_id);
		return ResponseEntity.ok("Data deleted successfully");
	}

}
