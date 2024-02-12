package com.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Activity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int ac_id;
	private String name;
	private String location;
	private String shift_time;
	
	
	public Activity() {
		super();
	}


	public Activity(int ac_id, String name, String location, String shift_time) {
		super();
		this.ac_id = ac_id;
		this.name = name;
		this.location = location;
		this.shift_time = shift_time;
	}


	public int getAc_id() {
		return ac_id;
	}


	public void setAc_id(int ac_id) {
		this.ac_id = ac_id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getLocation() {
		return location;
	}


	public void setLocation(String location) {
		this.location = location;
	}


	public String getShift_time() {
		return shift_time;
	}


	public void setShift_time(String shift_time) {
		this.shift_time = shift_time;
	}


	@Override
	public String toString() {
		return "Activity [ac_id=" + ac_id + ", name=" + name + ", location=" + location + ", shift_time=" + shift_time
				+ "]";
	}

	
	
	

}
