package com.example.converter.repository;

import com.example.converter.models.Convert;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IConvertRepository extends JpaRepository<Convert, Integer> {
}
