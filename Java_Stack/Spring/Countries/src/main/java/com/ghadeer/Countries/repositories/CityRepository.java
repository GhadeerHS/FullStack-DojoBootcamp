package com.ghadeer.Countries.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ghadeer.Countries.models.City;

@Repository
public interface CityRepository extends CrudRepository<City, Integer> {
	List<City> findAll();
}