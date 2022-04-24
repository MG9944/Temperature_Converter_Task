package com.example.converter.services;

import com.example.converter.models.Convert;

import java.util.List;

public interface IConvertService {
    List<Convert> findAll();
    void delete(Integer id);
    void save(Convert convert);
}
