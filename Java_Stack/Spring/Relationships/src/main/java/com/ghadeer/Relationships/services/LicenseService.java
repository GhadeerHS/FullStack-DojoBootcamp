package com.ghadeer.Relationships.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.ghadeer.Relationships.models.License;
import com.ghadeer.Relationships.models.Person;
import com.ghadeer.Relationships.repositories.LicenseRepository;

@Service
public class LicenseService {
	private final LicenseRepository licenseRepository;

	public LicenseService(LicenseRepository licenseRepository) {
		this.licenseRepository = licenseRepository;
	}
	
	public List<License> allLicenses() {
		return licenseRepository.findAll();
	}

	public License createLicense(License l) {
		String number = String.format("%06d", l.getPerson().getId());
		l.setNumber(number);
		return licenseRepository.save(l);
	}
	
	public License findLicense(Long id) {
		Optional<License> optionalLicense = licenseRepository.findById(id);
		if(optionalLicense.isPresent()) {
			return optionalLicense.get();
		} else {
			return null;
		}
	}

	public License findLicense(Person person) {
		return licenseRepository.findByPerson(person);
	}
}