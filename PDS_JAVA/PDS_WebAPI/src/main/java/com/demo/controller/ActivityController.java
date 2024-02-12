package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.service.IActivityService;
import com.demo.model.*;
import java.util.List;


@RestController
@RequestMapping("/activity")
public class ActivityController {

	@Autowired
	private IActivityService aservice;
	
	
	@GetMapping("/activities")
	public ResponseEntity<List<Activity>> getallactivities() {
		return ResponseEntity.ok(aservice.getallactivities());
	}
	
	
	@GetMapping("/activities/{ac_id}")
	public ResponseEntity<Activity> getallactivities(@PathVariable int ac_id) {
		Activity p = aservice.getById(ac_id);
		if (p != null)
			return ResponseEntity.ok(p);
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

	@PostMapping("/activities/{ac_id}")
	public ResponseEntity<String> addactivity(@RequestBody Activity p) {
		aservice.addnewactivity(p);
		return ResponseEntity.ok("Data added successfully");
	}

	@PutMapping("/activities/{ac_id}")
	public ResponseEntity<String> updateactivity(@RequestBody Activity p) {
		aservice.updateById(p);
		return ResponseEntity.ok("Data modified successfully");
	}

	@DeleteMapping("/activities/{ac_id}")
	public ResponseEntity<String> deleteactivity(@PathVariable int ac_id) {
		aservice.deleteById(ac_id);
		return ResponseEntity.ok("Data deleted successfully");
	}
	

	
}
