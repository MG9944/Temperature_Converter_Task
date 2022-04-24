package com.example.converter.services;

import com.example.converter.models.Convert;
import com.example.converter.repository.IConvertRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

//A service layer is a layer in an application that facilitates communication between the controller and the persistence layer
@Service
@RequiredArgsConstructor
public class ConvertService implements IConvertService {

    private final IConvertRepository convertRepository;

    //Overriding methods from controller
    @Override
    public List<Convert> findAll() {
        return convertRepository.findAll();
    }

    @Override
    public void delete(Integer id) {
        convertRepository.deleteById(id);
    }

    @Override
    public void save(Convert convert) {
        convertRepository.save(convert);
    }
}
