package com.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Admin {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int ad_id;
	private String username;
	private String password;
	
	public Admin() {
		super();
	}

	public Admin(int ad_id, String username, String password) {
		super();
		this.ad_id = ad_id;
		this.username = username;
		this.password = password;
	}

	public int getAd_id() {
		return ad_id;
	}

	public void setAd_id(int ad_id) {
		this.ad_id = ad_id;
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
		return "Admin [ad_id=" + ad_id + ", username=" + username + ", password=" + password + "]";
	}
	
	
	
	

}
