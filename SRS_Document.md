# *Police-Duty-Scheduling*
## Title : 
            Police-Duty-Scheduling
## Client :
            Chaturshringi Police Station, Shivajinagar, Pune
## Team :  
            Police,chaturshringi police station Staff Members,System Analyst,Business Analyst,Quality Assurance Team,Architect
## Objective (Purpose) :
          /*  This web application provides the facility to conduct the online examination, evaluate the result and display result in specific time dicided by the CDAC team. The user will be able to register, login & give the exam with specific id. portal will be ensure a exam related common data to student, Also will ensure error free assessment of the exam which is going to be conducted. */
	     This web application provides the facility to schedules the police officers daily duties. all officers registration will be done by attendance master. all officers login the website and check itself tommarrow duty.

## Scope :
            This application can be used in educational institute as well as corporate world. Student can use the portal at anytime and anywhere also it is web based application. System administrator has previleges to create, modify and test paper and topic.
## Definition :
	
## Functional Requirements :
	- Student :
	Student will be able to create a profile & regster for the exam and registration can be done through mobile number and email id.
	After registration student will be given the exam instructon & estimated time for exam on portal anytime, anywhere.
	POP up notification should be send to the register student in case of any change or updation of the information.
	Exam can be started & finished at same on all machine.
	Student can mark, review and change the answer option.
	Student can submit the answers before time or it will be automatically submited.
	Result will be displayed for student on specific time dicided CDAC cordinator.
	
	- System administrator :
	CDAC representative should easily check the exam related status of the student.       
    The system administrator will be able to upload exam paper sets with correct answer on the portal.
    System admin will be notify for the multiple registration of single student.
    The system admin will have access to web camera to track the activity of student during exam.
    The evaluated result to be displayed to admin & after accessibility by admin to students.
    The session id will be generated for each student when exam is started, session ID will ensure the exam resumption of the student on the abnormal termination of exam due to server or technical issue.

## NonFunctional Requirement:

### Security
Registered student will allowed to see the exam update.	
The webside should have authentication process for students while logging.
System will automatically log off  all user after some time due to inactiveness.
Account of student will be blocked by system if it is inavtivated mor than specific time decided by admin.
System  will internally maintain secure communiction channel between Servers ( Web Servers, App Servers, databse Server)
Sensitive data will be always encrypted across communcation.
User proper firewall to protect servers from out side fishing, velnerable attacks.


### Reliability
Continous updates are matained , continous Adminstration is done to keep system operational.
During peak hours system will maintain same user experaince by managing load balacning .

### Availability
The assessment portal will be accessible for student - twice in year.
Duration of accessibility - 2 months [24 x 7].
	
### Maintainability:
A database software will be used to maintain System data Persistence.
IT operations team will easily monitor and configure System using Adminstrative tools provided by Servers.
Separate enviornment will be maintained for system for isolation in  production, testing, and development.

### Portablility:
PDA: Portable Device Application
Portable divice application system will be provided portable user interface through users will be able to access online exam portal.
System can be deployed to single server, multi server, to any OS, Cloud (Azure or AWS or GCP)

### Accessibility:
only registered student will be able to login on website after authentication.

### Durability:
Student will able access web application at time of exam duration

### Efficiency:
Maximum number of users  will login to portal at same time.
System will be able to manage all transactions with isolation.

### Modularity:
System will designed and developed using reusable, independent senarios in the form of modules.
These modules will be loosely coupled and highly cohesive.
	
### Scalability:
System will be able  to  provide  consistent user exeprience.

### Safety:	
online exam portal will be secure from malicious attack, fishing.
online exam portal functionalities are protected from outside with firewall configuration.
online exam portal will be always kept updated with latest anit virus software.
Student data will be backed up periodically to ensure safty of data using increamental back up strategy.


