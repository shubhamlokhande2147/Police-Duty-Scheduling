# *Police-Duty-Scheduling*
## Title : 
   Police-Duty-Scheduling
## Client :
   
   Chaturshringi Police Station, Shivajinagar, Pune
## Team :  
   Police,chaturshringi police station Staff Members,System Analyst,Business Analyst,Quality Assurance Team,Architect
## Objective (Purpose) :
   This web application provides the facility to schedules the police officers daily duties. all officers registration will be done by attendance master. all officers login the website and check itself tommarrow duty.

## Scope :
 
   This application can be used in police station as well as corporate world. Police Officers can use the portal at anytime and anywhere also it is web based application. Admin and Attendance masters has previleges to create, modify, view schedules and also police officer view schedules.
   The scope of the project is to develop a web-based application that helps police department to maintain their daily duty scheduling records. The application will provide functionalities to register attendance master, police officers to manage scheduling reports for officers.
## Definition :
	
## Functional Requirements :
 - Admin :

   Admin will be able to login himself. Then admin will register attandance masters. 
   Admin can also view the daily duty reports. If any emergency occcurs, then admin can arrange emergency meet. 
   Admin has authority to accept or reject officers as well as attendance master leave.
   Admin has able to create different types of shifts(day,night,overtime).

 - Attendance Masters :
	
      Attendance masters will login himself first, then do many activities. 
      Attendance masters can change his own authentication credentials. 
      Attendance masters will register all police officers. 
      Attendance masters will insert the list of activities with locations.
      Attendance masters assign duty to police officers through schedule sheet and also authority to modification in schedule sheet.
      Attendance masters can view list of present officers. 	
      Attendance masters can generate scheduled duty report.
      He maintained a historical record of schedules and they may use for auditing purpose.
      
 
 - Police Officers :
   
      Police officers will login himself and view scheduled duty report.
      Police officers can change his own authentication credentials. 
      Police officers can apply for leave.

## Non-Functional Requirement:

### Security
Registered officers will allowed to see the generated reports.	
The website should have authentication process for admin, attendance master, police officers while logging.
System will automatically log off  all user after some time due to inactiveness.
System  will internally maintain secure communiction channel between Servers ( Web Servers, App Servers, databse Server ).
Sensitive data will be always encrypted across communcation.
User proper firewall to protect servers from out side fishing, velnerable attacks.


### Reliability
Continous updates are matained , continous Adminstration is done to keep system operational.
During peak hours system will maintain same user experaince by managing load balacning .

### Availability
Uptime: 24*7 available, 99.999%
	
### Maintainability:
A database software will be used to maintain System data Persistence.
IT operations team will easily monitor and configure System using Adminstrative tools provided by Servers.
Separate enviornment will be maintained for system for isolation in  production, testing, and development.

### Portablility:
PDA: Portable Device Application
Portable divice application system will be provided portable user interface through users will be able to access online web based system.
System can be deployed to single server, multi server, to any OS, Cloud (Azure or AWS or GCP).

### Accessibility:
only registered admin, attendance master and officers will be able to login on website after authentication.

### Durability:
The system will maintain officers details.
The system will implement backup and recovery for retaining officers data over the time.
The system will use cache for faster data retrieval and improved performance.

### Efficiency:
Maximum number of officers will login to website at same time.
System will be able to manage all transactions with isolation.

### Modularity:
System will designed and developed using reusable, independent senarios in the form of modules.
These modules will be loosely coupled and highly cohesive.
	
### Scalability:
The system will provide a consistent user experience to users irrespective of load.

### Safety:	

The officer's login page will be secure from malicious attacks and phishing.
Separate environments will be maintained for the system for isolation in production, testing, and development.


