package com.gmail.merikbest2015.springbootreactjscrudapp.service;

import com.gmail.merikbest2015.springbootreactjscrudapp.model.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeService {

    List<Employee> findAll();

    Optional<Employee> findById(Long id);

    Employee save(Employee employee);

    void delete(Employee employee);
}
