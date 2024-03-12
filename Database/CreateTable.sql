drop table if exists Attendance_Master;
create table Attendance_Master (
   AM_id int PRIMARY KEY auto_increment, 
   belt_no int, 
   name varchar(50),
   email_id varchar(25),
   mobile varchar(12), 
   username varchar(50),
   password varchar(50),
   
   CONSTRAINT checkmobile
        CHECK( LENGTH(mobile) BETWEEN 10 AND 15)
   );



drop table if exists Activity;
create table Activity (
        AC_id int PRIMARY KEY auto_increment,
	 name varchar(50),
	 location varchar(50),
	 shift_time varchar(50) 
    );


drop table if exists Police;
create table Police (
        pid int PRIMARY KEY auto_increment,
        ac_id int,
		belt_no int, 
        name varchar(50),
        email_id varchar(25),
        desg varchar(50),
	dept varchar(50),
        mobile varchar(12), 
        username varchar(50),
        password varchar(50),
        roll_id int default 2,
        FOREIGN KEY (ac_id) REFERENCES activity(ac_id)
     );

drop table if exists roll;
create table roll (
        roll_id int PRIMARY KEY auto_increment,
        roll_type varchar(50)
	);

drop table if exists login;
create table login (
        log_id int PRIMARY KEY auto_increment,
        roll_type varchar(50),
	username varchar(50),
        password varchar(50),
        roll_id int,
		FOREIGN KEY (roll_id) REFERENCES roll(roll_id)
	);
	 
drop table if exists P_Admin;
create table P_Admin (
	 
	    username varchar(50) DEFAULT "Admin",
	    password varchar(50) DEFAULT "Admin"	 
	 );



drop table if exists Duty_History;
CREATE TABLE Duty_History(
  dh_id INT NOT NULL PRIMARY KEY,
  date1 DATE DEFAULT CURRENT_DATE,
  pid INT,
  ac_id INT,
  FOREIGN KEY(pid) REFERENCES Police(pid),
  FOREIGN KEY(ac_id) REFERENCES Activity(ac_id)
);


drop table if exists police_Leave;
CREATE TABLE police_Leave(
     lv_id int NOT NULL PRIMARY KEY,
     From_Date VARCHAR(20),
     To_Date VARCHAR(20),
     Reason VARCHAR(50),
     Status bool,
     police_id int,
            FOREIGN KEY(police_id) REFERENCES police(pid) 
);

drop table if exists Emergency_meet;
CREATE TABLE Emergency_meet(
     em_id int NOT NULL PRIMARY KEY,
     Time1 VARCHAR(20),
     Date1 VARCHAR(20),
     Location VARCHAR(20),
     Reason VARCHAR(50),
     police_id int,
            FOREIGN KEY(police_id) REFERENCES police(pid) 
);
