package com.example.converter.models;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

//The model responsible for creating the table in the database 
//And the variables that correspond to the columns in the table
@Entity
@Data
public class Convert {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;
    public Double celsius;
    public Double fahrenheit;
    public Double kelvin;
}