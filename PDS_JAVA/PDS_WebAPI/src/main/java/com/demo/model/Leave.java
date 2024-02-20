package com.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

//@Entity
//@Table(name = "police_leave")
//public class Leave {
//	
//	   @Id
//	    @GeneratedValue(strategy = GenerationType.IDENTITY)
//	    @Column(name = "lv_id")
//	    private int lvId;
//	    private String fromDate;
//	    private String toDate;
//	    private String reason;
//	    private boolean status;
//	   // private int pid;
//
//		@ManyToOne
//	    @JoinColumn(name = "pid")
//	    private Police police;	//Foreign key referencing pid in police table
//
//	    
//		public Leave() {
//			super();
//		}
//
//		public Leave(int lvId, String fromDate, String toDate, String reason, boolean status, Police police) {
//			super();
//			this.lvId = lvId;
//			this.fromDate = fromDate;
//			this.toDate = toDate;
//			this.reason = reason;
//			this.status = status;
//			//this.police = police;
//		}
//
//		public int getLvId() {
//			return lvId;
//		}
//
//		public void setLvId(int lvId) {
//			this.lvId = lvId;
//		}
//
//		public String getFromDate() {
//			return fromDate;
//		}
//
//		public void setFromDate(String fromDate) {
//			this.fromDate = fromDate;
//		}
//
//		public String getToDate() {
//			return toDate;
//		}
//
//		public void setToDate(String toDate) {
//			this.toDate = toDate;
//		}
//
//		public String getReason() {
//			return reason;
//		}
//
//		public void setReason(String reason) {
//			this.reason = reason;
//		}
//
//		public boolean isStatus() {
//			return status;
//		}
//
//		public void setStatus(boolean status) {
//			this.status = status;
//		}
//
//		public Police getPolice() {
//			return police;
//		}
//
//		public void setPolice(Police police) {
//			this.police = police;
//		}
//
//		@Override
//		public String toString() {
//			return "Leave [lvId=" + lvId + ", fromDate=" + fromDate + ", toDate=" + toDate + ", reason=" + reason
//					+ ", status=" + status + ", police=" + police+ "]";
//		}

//		@Override
//		public String toString() {
//			return "Leave [lvId=" + lvId + ", fromDate=" + fromDate + ", toDate=" + toDate + ", reason=" + reason
//					+ ", status=" + status + "]";
//		}
//}
//
@Entity
@Table(name = "police_leave")
public class Leave {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "lv_id")
    private int lvId;
    
    @Column(name = "from_date")
    private String fromDate;
    
    @Column(name = "to_date")
    private String toDate;
    
    private String reason;
    
    private boolean status;
    
    @Column(name = "pid")
    private int pid;

	public Leave() {
		super();
	}

	public int getLvId() {
		return lvId;
	}

	public void setLvId(int lvId) {
		this.lvId = lvId;
	}

	public String getFromDate() {
		return fromDate;
	}

	public void setFromDate(String fromDate) {
		this.fromDate = fromDate;
	}

	public String getToDate() {
		return toDate;
	}

	public void setToDate(String toDate) {
		this.toDate = toDate;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public int getPid() {
		return pid;
	}

	@Override
	public String toString() {
		return "Leave [lvId=" + lvId + ", fromDate=" + fromDate + ", toDate=" + toDate + ", reason=" + reason
				+ ", status=" + status + ", pid=" + pid + "]";
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

     



}
