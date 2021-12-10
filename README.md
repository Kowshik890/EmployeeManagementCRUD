# EmployeeManagementCRUD
### This is a simple CRUD application which is developed using "Angular, Spring Boot & PostgreSQL" with the help of REST API.
The functionalities of this project are:
1. Show All Employee Information (ORDER BY ASC)

[![Employee-List.png](https://i.postimg.cc/TwcV64fs/Employee-List.png)](https://postimg.cc/xJcJGgkG)

2. Insert Employee Information
	* ID is generated automatically
	* Unique employee code


[![Add-Employee.png](https://i.postimg.cc/CLS2k3RR/Add-Employee.png)](https://postimg.cc/Z0sjhDFm)

3. Update Employee Information
	* While updating Employee Information, ID and Employee Code can't be updated
4. Delete Employee Information by Employee ID
	* While deleting one Employee's Information from the middle, the next Employee ID won't be changed
		* Example: There are five rows, row number 3 needs to delete. At the time of new insertion, Employee ID will start from 6

[![delete1.png](https://i.postimg.cc/52RFWQT8/delete1.png)](https://postimg.cc/mP7rQkbr)

* After deleting Employee

[![Delete2.png](https://i.postimg.cc/0QdQjzWW/Delete2.png)](https://postimg.cc/wyMHbjdL)

5. Search Employee from the Employee List by keyword

[![Search-By-Keyword.png](https://i.postimg.cc/WbyMTrcs/Search-By-Keyword.png)](https://postimg.cc/xcKkPXdZ)
