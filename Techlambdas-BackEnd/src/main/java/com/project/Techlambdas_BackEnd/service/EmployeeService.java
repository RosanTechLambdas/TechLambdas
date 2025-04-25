package com.project.Techlambdas_BackEnd.service;


import com.project.Techlambdas_BackEnd.model.Employee;
import com.project.Techlambdas_BackEnd.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {
    @Autowired private EmployeeRepo employeeRepo;
    public List<Employee> getData() {
        return employeeRepo.findAll();
    }

    public void postData(Employee employee){
        employeeRepo.save(employee);
    }
//
//    public void changeData(int id, Employee employee) {
//        Optional<Employee> employee1=employeeRepo.findById(id);
//
//        employee blog1=blog.get();
//        blog1.setAuthor(blogData.getAuthor());
//        blog1.setTitle(blogData.getTitle());
//        blog1.setContent(blogData.getContent());
//        System.out.println("data"+blog1);
//        blogRepo.save(blog1);
//    }

    public void deleteData(int id) {
        employeeRepo.deleteById(id);
    }
}
