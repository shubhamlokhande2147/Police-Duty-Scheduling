package com.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "duty_history")
public class Duty_History {
	

	@Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  private int dh_id;
	  private String dh_date;
	  private int pid;
	  private int ac_id;
	  
	  
	  
	  
		public Duty_History() {
		super();
	}




		public Duty_History(int dh_id, String dh_date, int pid, int ac_id) {
		super();
		this.dh_id = dh_id;
		this.dh_date = dh_date;
		this.pid = pid;
		this.ac_id = ac_id;
	}




		public int getDh_id() {
			return dh_id;
		}




		public void setDh_id(int dh_id) {
			this.dh_id = dh_id;
		}




		public String getDh_date() {
			return dh_date;
		}




		public void setDh_date(String dh_date) {
			this.dh_date = dh_date;
		}




		public int getPid() {
			return pid;
		}




		public void setPid(int pid) {
			this.pid = pid;
		}




		public int getAc_id() {
			return ac_id;
		}




		public void setAc_id(int ac_id) {
			this.ac_id = ac_id;
		}




		@Override
		public String toString() {
			return "Duty_History [dh_id=" + dh_id + ", dh_date=" + dh_date + ", pid=" + pid + ", ac_id=" + ac_id + "]";
		}


	  
		

}
