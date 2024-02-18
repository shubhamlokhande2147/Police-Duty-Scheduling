package com.demo.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Login {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int log_id;
    private String username;
	private String password;
	
	@ManyToOne
	@JoinColumn(name="roleid")
    Role roleid;

	public Login() {
		super();
	}

	public Login(int log_id, String username, String password, Role roleid) {
		super();
		this.log_id = log_id;
		this.username = username;
		this.password = password;
		this.roleid = roleid;
	}

	public int getLog_id() {
		return log_id;
	}

	public void setLog_id(int log_id) {
		this.log_id = log_id;
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

	public Role getRoleid() {
		return roleid;
	}

	public void setRoleid(Role roleid) {
		this.roleid = roleid;
	}
	
}
