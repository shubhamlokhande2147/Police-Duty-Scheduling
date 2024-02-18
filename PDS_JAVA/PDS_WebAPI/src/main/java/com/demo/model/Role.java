package com.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Role {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int roleid;
	private String roletype;
	

	public Role() {
		super();
	}


	public Role(int roleid, String roletype) {
		super();
		this.roleid = roleid;
		this.roletype = roletype;
	}


	public int getRoleid() {
		return roleid;
	}


	public void setRoleid(int roleid) {
		this.roleid = roleid;
	}


	public String getRoletype() {
		return roletype;
	}


	public void setRoletype(String roletype) {
		this.roletype = roletype;
	}


	@Override
	public String toString() {
		return "Role [roleid=" + roleid + ", roletype=" + roletype + "]";
	}
	
	
}