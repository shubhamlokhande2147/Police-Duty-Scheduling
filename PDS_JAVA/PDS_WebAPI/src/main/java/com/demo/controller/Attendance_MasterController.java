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

import com.demo.model.*;
import com.demo.service.IAttendance_MasterService;

@RestController
@RequestMapping("/attendance_master")
@CrossOrigin(origins = "http://localhost:3000")
public class Attendance_MasterController {
	
	@Autowired
	private IAttendance_MasterService aservice;
	
	@GetMapping("/attendance_masters")
	public ResponseEntity<List<Attendance_Master>> getallattendance_masters() {
		return ResponseEntity.ok(aservice.getallattendance_masters());
	}
	
	
	@GetMapping("/attendance_masters/{ac_id}")
	public ResponseEntity<Attendance_Master> getallattendance_masters(@PathVariable int ac_id) {
		Attendance_Master p = aservice.getById(ac_id);
		if (p != null)
			return ResponseEntity.ok(p);
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

	@PostMapping("/attendance_masters/{ac_id}")
	public ResponseEntity<String> addnewattendance_master(@RequestBody Attendance_Master p) {
		aservice.addnewattendance_master(p);
		return ResponseEntity.ok("Data added successfully");
	}

	@PutMapping("/attendance_masters/{ac_id}")
	public ResponseEntity<String> updateattendance_master(@RequestBody Attendance_Master p) {
		aservice.updateById(p);
		return ResponseEntity.ok("Data modified successfully");
	}

	@DeleteMapping("/attendance_masters/{ac_id}")
	public ResponseEntity<String> deleteattendance_master(@PathVariable int ac_id) {
		aservice.deleteById(ac_id);
		return ResponseEntity.ok("Data deleted successfully");
	}
	

}
