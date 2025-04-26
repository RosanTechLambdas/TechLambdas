package com.project.Techlambdas_BackEnd.controller;

import com.project.Techlambdas_BackEnd.model.Employee;
import com.project.Techlambdas_BackEnd.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("employee")
public class EmployeeController {
    @Autowired private EmployeeService employeeService;
    @GetMapping
    public List<Employee> getData(){
        return employeeService.getData();
    }

    @PostMapping
    public void postData(@RequestBody Employee employee){
           employee.setId(UUID.randomUUID().toString());
            employeeService.postData(employee);
            System.out.println("Employee added successfully");
           }
    @PutMapping("/{id}")
    public void editBlog(@PathVariable String id, @RequestBody Employee employee) {
        System.out.println(id);
        employeeService.changeData(id,employee);
    }

    @DeleteMapping("/{id}")
    public void deleteBlog(@PathVariable String id) {
        System.out.println("id:"+id);
        employeeService.deleteData(id);
    }
}
