package com.demo.model;

public class CommonUser {
	
	
	private int belt_no;
	private String name;
	private String email_id;
	private String desg;
	private String dept;
	private String mobile;
	private String username;
	private String password;
	private String duty; 
	private  int logind;
	private int roleid;
	
	public CommonUser() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CommonUser(int belt_no, String name, String email_id, String desg, String dept, String mobile,
			String username, String password, String duty, int logind, int roleid) {
		super();
		this.belt_no = belt_no;
		this.name = name;
		this.email_id = email_id;
		this.desg = desg;
		this.dept = dept;
		this.mobile = mobile;
		this.username = username;
		this.password = password;
		this.duty = duty;
		this.logind = logind;
		this.roleid = roleid;
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

	public String getDesg() {
		return desg;
	}

	public void setDesg(String desg) {
		this.desg = desg;
	}

	public String getDept() {
		return dept;
	}

	public void setDept(String dept) {
		this.dept = dept;
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

	public String getDuty() {
		return duty;
	}

	public void setDuty(String duty) {
		this.duty = duty;
	}

	public int getLogind() {
		return logind;
	}

	public void setLogind(int logind) {
		this.logind = logind;
	}

	public int getRoleid() {
		return roleid;
	}

	public void setRoleid(int roleid) {
		this.roleid = roleid;
	}
	
	
	
	

}
