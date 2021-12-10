package com.example.employeemanager.repository;

import com.example.employeemanager.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    @Transactional
    @Modifying
    @Query("SELECT e FROM Employee e ORDER BY id ASC")
    List<Employee> findAllEmployee();

    Optional<Employee> findEmployeeById(Long id);
    void deleteEmployeeById(Long id);
}
