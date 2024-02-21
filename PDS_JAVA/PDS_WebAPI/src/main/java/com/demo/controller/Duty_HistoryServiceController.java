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

import com.demo.model.Duty_History;
import com.demo.service.IDuty_HistoryService;

@RestController
@RequestMapping("/duty_history")
@CrossOrigin(origins = "http://localhost:3000")
public class Duty_HistoryServiceController {
	

	@Autowired
	private IDuty_HistoryService dservice;
	

	@GetMapping("/getallduties")
	public ResponseEntity<List<Duty_History>> getallduties() {
		return ResponseEntity.ok(dservice.getallduties());
	}
	
	
	
	@GetMapping("/dutieses/{dh_id}")
	public ResponseEntity<Duty_History> getallduties(@PathVariable int dh_id) {
		Duty_History p = dservice.getById(dh_id);
		if (p != null)
			return ResponseEntity.ok(p);
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

	@PostMapping("/add_duty/{dh_id}")
	public ResponseEntity<String> addduty(@RequestBody Duty_History p) {
		dservice.addnewduty(p);
		return ResponseEntity.ok("Data added successfully");
	}

	@PutMapping("/update_duty/{dh_id}")
	public ResponseEntity<String> updateduty(@RequestBody Duty_History p) {
		dservice.updateById(p);
		return ResponseEntity.ok("Data modified successfully");
	}

	@DeleteMapping("/delete_activity/{ac_id}")
	public ResponseEntity<String> deleteactivity(@PathVariable int dh_id) {
		dservice.deleteById(dh_id);
		return ResponseEntity.ok("Data deleted successfully");
	}
	

	
	
	

}
