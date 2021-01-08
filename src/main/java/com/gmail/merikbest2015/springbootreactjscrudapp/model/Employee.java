package com.gmail.merikbest2015.springbootreactjscrudapp.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "employees")
@Data
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotBlank(message = "Empty field!")
    @Column(name = "first_name")
    private String firstName;
    @NotBlank(message = "Empty field!")
    @Column(name = "last_name")
    private String lastName;
    @NotBlank(message = "Empty field!")
    @Column(name = "city")
    private String city;
    @NotBlank(message = "Empty field!")
    @Column(name = "address")
    private String address;
    @NotBlank(message = "Empty field!")
    @Column(name = "telephone")
    private String telephone;
}
