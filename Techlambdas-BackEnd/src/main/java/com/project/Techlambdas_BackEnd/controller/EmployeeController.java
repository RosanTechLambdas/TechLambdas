package com.project.Techlambdas_BackEnd.controller;

;
import com.project.Techlambdas_BackEnd.model.Employee;
import com.project.Techlambdas_BackEnd.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("blog")
public class EmployeeController {
    @Autowired private EmployeeRepo employeeRepo;
    @GetMapping
    public List<Employee> getData(){
        return employeeRepo.getData();
    }
    @PostMapping
    public void postData(@RequestBody Employee employee){
        employeeRepo.postData(employee);
    }
    @PutMapping("/{id}")
    public void editBlog(@PathVariable int id, @RequestBody Employee blogData) {
        System.out.println(id);
        blogService.changeData(id,blogData);
    }

    @DeleteMapping("/{id}")
    public void deleteBlog(@PathVariable int id) {
        System.out.println("id:"+id);
        blogService.deleteData(id);
    }
}
