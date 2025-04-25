package com.project.Techlambdas_BackEnd.repo;

import com.project.Techlambdas_BackEnd.model.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EmployeeRepo extends MongoRepository<Employee, Integer> {
}
