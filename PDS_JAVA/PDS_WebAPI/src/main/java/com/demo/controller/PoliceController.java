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

import com.demo.model.Police;
import com.demo.service.IPoliceService;

@RestController
@RequestMapping("/police")
@CrossOrigin(origins = "http://localhost:3000")
public class PoliceController {

	@Autowired
	private IPoliceService pservice;
	
	

	@GetMapping("/getallpolices")
	public ResponseEntity<List<Police>> getallpolices() {
		return ResponseEntity.ok(pservice.getallpolice());
	}
	
	
	@GetMapping("/polices/{pid}")
	public ResponseEntity<Police> getallpolices(@PathVariable int pid) {
		Police p = pservice.getById(pid);
		if (p != null)
			return ResponseEntity.ok(p);
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

	@PostMapping("/add_police/{pid}")
	public ResponseEntity<String> addpolice(@RequestBody Police p) {
		pservice.addnewpolice(p);
		return ResponseEntity.ok("Data added successfully");
	}

	@PutMapping("/update_police/{pid}")
	public ResponseEntity<String> updateactivity(@RequestBody Police p) {
		pservice.updateById(p);
		return ResponseEntity.ok("Data modified successfully");
	}

	@DeleteMapping("/delete_police/{pid}")
	public ResponseEntity<String> deleteactivity(@PathVariable int pid) {
		pservice.deleteById(pid);
		return ResponseEntity.ok("Data deleted successfully");
	}
	
	
	//----------------------------
//    @GetMapping("/police/api")
//    public List<Police> getAllPolice() {
//        List<Police> policeList = pservice.findAll();
//        // Iterate through policeList and access the name of the associated Activity
//        for (Police police : policeList) {
//            String activityName = police.getActivity().getName();
//         System.out.println(activityName);
//            // Do something with the activityName...
//        }
//        return policeList;
//    }
	
	

	
	
}
