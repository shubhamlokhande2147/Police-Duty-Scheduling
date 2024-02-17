package com.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Police {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pid;
	//private int ac_id;// foreign key
	private int belt_no;
	private String name;
	private String email_id;
	private String desg;
	private String dept;
	private String mobile;
	private String username;
	private String password;
	private String duty;
	private int roll_id;
	
	@ManyToOne
    @JoinColumn(name = "ac_id")
    private Activity activity; // Represents the foreign key relationship

	
	public Police() {
		super();
	}


	public Police(int pid, int ac_id, int belt_no, String name, String email_id, String desg, String dept,
			String mobile, String username, String password, String duty, int roll_id, Activity activity) {
		super();
		this.pid = pid;
		//this.ac_id = ac_id;
		this.belt_no = belt_no;
		this.name = name;
		this.email_id = email_id;
		this.desg = desg;
		this.dept = dept;
		this.mobile = mobile;
		this.username = username;
		this.password = password;
		this.duty = duty;
		this.roll_id = roll_id;
		this.activity = activity;
	}


	public int getPid() {
		return pid;
	}


	public void setPid(int pid) {
		this.pid = pid;
	}


//	public int getAc_id() {
//		return ac_id;
//	}


//	public void setAc_id(int ac_id) {
//		this.ac_id = ac_id;
//	}


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


	public int getRoll_id() {
		return roll_id;
	}


	public void setRoll_id(int roll_id) {
		this.roll_id = roll_id;
	}


	public Activity getActivity() {
		return activity;
	}


	public void setActivity(Activity activity) {
		this.activity = activity;
	}


	@Override
	public String toString() {
		return "Police [pid=" + pid + ", belt_no=" + belt_no + ", name=" + name + ", email_id="
				+ email_id + ", desg=" + desg + ", dept=" + dept + ", mobile=" + mobile + ", username=" + username
				+ ", password=" + password + ", duty=" + duty + ", roll_id=" + roll_id + ", activity=" + activity + "]";
	}
	
	
	
	

    

	
	

    

}
