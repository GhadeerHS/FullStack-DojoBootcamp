package com.ghadeer.DojoOverflow.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ghadeer.DojoOverflow.models.Tag;

@Repository
public interface TagRepository extends CrudRepository<Tag, Integer> {
	List<Tag> findAll();
	List<Tag> findAllByQuestions(Integer id);
	Tag findBySubject(String s);
}