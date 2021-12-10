# EmployeeManagementCRUD
### This is a simple CRUD application which is developed using "Angular, Spring Boot & PostgreSQL" with the help of REST API.
The functionalities of this project are:
1. Show All Employee Information
1. Insert Employee Information
	* ID is generated automatically
	* Unique employee code
1. Update Employee Information
	* While updating Employee Information, ID and Employee Code can't be updated
1. Delete Employee Information by Employee ID
	* While deleting one Employee's Information from the middle, the next Employee ID won't be changed
		* Example: There are five rows, row number 3 needs to delete. At the time of new insertion, Employee ID will start from 6

