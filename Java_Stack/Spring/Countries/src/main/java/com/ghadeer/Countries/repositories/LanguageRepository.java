package com.ghadeer.Countries.repositories;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ghadeer.Countries.models.Language;

@Repository
public interface LanguageRepository extends CrudRepository<Language, Integer> {
	List<Language> findAll();
}