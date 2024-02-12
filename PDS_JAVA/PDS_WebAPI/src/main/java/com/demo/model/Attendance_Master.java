package com.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Attendance_Master {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int am_id;
	private int belt_no;
	private String name;
	private String email_id;
	private String mobile;
	private String username;
	private String password;
	
	public Attendance_Master() {
		super();
	}

	public Attendance_Master(int am_id, int belt_no, String name, String email_id, String mobile, String username,
			String password) {
		super();
		this.am_id = am_id;
		this.belt_no = belt_no;
		this.name = name;
		this.email_id = email_id;
		this.mobile = mobile;
		this.username = username;
		this.password = password;
	}

	public int getAm_id() {
		return am_id;
	}

	public void setAm_id(int am_id) {
		this.am_id = am_id;
	}

	public int getBelt_no() {
		return belt_no;
	}

	public void setBelt_no(int belt_no) {
		this.belt_no = belt_no;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Attendance_Master [am_id=" + am_id + ", belt_no=" + belt_no + ", name=" + name + ", email_id="
				+ email_id + ", mobile=" + mobile + ", username=" + username + ", password=" + password + "]";
	}
	
	
	
	

}
