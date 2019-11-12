package com.ghadeer.Relationships.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.ghadeer.Relationships.models.Person;
import com.ghadeer.Relationships.repositories.PersonRepository;

@Service
public class PersonService {
	private final PersonRepository personRepository;

	public PersonService(PersonRepository personRepository) {
		this.personRepository = personRepository;
	}
	
	public List<Person> allPersons() {
		return personRepository.findAll();
	}
	
	public Person createPerson(Person p) {
		return personRepository.save(p);
	}
	
	public Person findPerson(Long id) {
		Optional<Person> optionalPerson = personRepository.findById(id);
		if(optionalPerson.isPresent()) {
			return optionalPerson.get();
		} else {
			return null;
		}
	}
}