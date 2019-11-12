package com.ghadeer.Relationships.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ghadeer.Relationships.models.License;
import com.ghadeer.Relationships.models.Person;

@Repository
public interface LicenseRepository extends CrudRepository<License, Long> {
	List<License> findAll();
	License findByPerson(Person person);
}