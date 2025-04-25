package com.project.Techlambdas_BackEnd.repo;

import com.project.Techlambdas_BackEnd.model.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface EmployeeRepo extends MongoRepository<Employee, Integer> {
}
