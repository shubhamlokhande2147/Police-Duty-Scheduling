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

import com.demo.model.Activity;
import com.demo.model.Leave;
import com.demo.model.Police;
import com.demo.service.ILeaveService;

@RestController
@RequestMapping("/leave")
@CrossOrigin(origins = "http://localhost:3000")
public class LeaveController {
	
	@Autowired
	private ILeaveService lservice;
	


	@GetMapping("/getalleaves")
	public ResponseEntity<List<Leave>> getallleaves() {
		return ResponseEntity.ok(lservice.getalleaves());
		
	}
	
	
	@GetMapping("/polices/{pid}")
	public ResponseEntity<Leave> getallleaves(@PathVariable int lvId) {
		Leave p = lservice.getById(lvId);
		if (p != null)
			return ResponseEntity.ok(p);
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

	
	
	@PostMapping("/add_police/{pid}")
	public ResponseEntity<String> addleave(@RequestBody Leave p) {

		             // List<Police> policeList = pservice.findAll();
//		  List<Police> policeList = pservice.getallpolice();
//
//                    //Iterate through policeList and access the name of the associated Activity
//        for (Police police : policeList) {
//		  Activity activityName = police.getActivity();
//         System.out.println(activityName);
//        }
//                
		lservice.addnewleave(p);
		return ResponseEntity.ok("Data added successfully");
	}

	@PutMapping("/update_police/{pid}")
	public ResponseEntity<String> updateactivity(@RequestBody Leave p) {
		lservice.updateById(p);
		return ResponseEntity.ok("Data modified successfully");
	}

	@DeleteMapping("/delete_police/{pid}")
	public ResponseEntity<String> deleteactivity(@PathVariable int lvId) {
		lservice.deleteById(lvId);
		return ResponseEntity.ok("Data deleted successfully");
	}
	
	
	
}
