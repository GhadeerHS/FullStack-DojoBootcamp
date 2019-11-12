package com.ghadeer.DojoOverflow.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ghadeer.DojoOverflow.models.Answer;

@Repository
public interface AnswerRepository extends CrudRepository<Answer, Integer> {
	List<Answer> findAll();
	List<Answer> findAllByQuestionId(Integer id);
}