package com.project.Techlambdas_BackEnd.service;


import com.project.Techlambdas_BackEnd.model.Employee;
import com.project.Techlambdas_BackEnd.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired private EmployeeRepo employeeRepo;
    public List<Employee> getData() {
        return employeeRepo.findAll();
    }

    public void postData(Employee employee){
        employeeRepo.save(employee);
    }

    public void changeData(String id, Employee updatedEmployee) {
        Optional<Employee> existingEmployeeOpt = employeeRepo.findById(id);

            Employee existingEmployee = existingEmployeeOpt.get();

            existingEmployee.setEmployeeName(updatedEmployee.getEmployeeName());
            existingEmployee.setGender(updatedEmployee.getGender());
            existingEmployee.setMobileNumber(updatedEmployee.getMobileNumber());
            existingEmployee.setCity(updatedEmployee.getCity());
            existingEmployee.setWorkType(updatedEmployee.getWorkType());

            System.out.println("Updated Employee: " + existingEmployee);
            employeeRepo.save(existingEmployee);
    }

    public void deleteData(String id) {
        employeeRepo.deleteById(id);
    }
}
