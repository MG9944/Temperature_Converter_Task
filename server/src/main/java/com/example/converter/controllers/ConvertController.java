package com.example.converter.controllers;

import com.example.converter.models.Convert;
import com.example.converter.services.IConvertService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//Application controller responsible with the methods used to write data to the database and delete it. 
@RestController
@RequestMapping("/api/convert")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ConvertController {

    private final IConvertService convertService;

    //Method to display data
    @GetMapping
    public List<Convert> findAll() {
        return convertService.findAll();
    }


    //Method to save data
    @PostMapping
    public void save(@RequestBody Convert convert) {
        //If any data field is not empty it will be written to the database, otherwise it will not be written
        if(convert.celsius != null && convert.fahrenheit != null && convert.kelvin != null) {
            convertService.save(convert); 
        }
    }

    //Method to delete data
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id){
        convertService.delete(id);
    }
}
