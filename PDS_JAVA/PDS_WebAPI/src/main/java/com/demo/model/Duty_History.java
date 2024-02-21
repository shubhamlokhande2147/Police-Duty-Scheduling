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
	  
	    @ManyToOne
	    @JoinColumn(name = "pid")
	    private Police police; // Represents the foreign key relationship
		
	    @ManyToOne
	    @JoinColumn(name = "ac_id")
	    private Activity activity; // Represents the foreign key relationship

		public Duty_History() {
			super();
		}
		

		public Duty_History(int dh_id, String dh_date, Police police, Activity activity) {
			super();
			this.dh_id = dh_id;
			this.dh_date = dh_date;
			this.police = police;
			this.activity = activity;
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

		public Police getPolice() {
			return police;
		}

		public void setPolice(Police police) {
			this.police = police;
		}

		public Activity getActivity() {
			return activity;
		}

		public void setActivity(Activity activity) {
			this.activity = activity;
		}


		@Override
		public String toString() {
			return "Duty_History [dh_id=" + dh_id + ", dh_date=" + dh_date + ", police=" + police + ", activity="
					+ activity + "]";
		}
	  
	  
		

}
