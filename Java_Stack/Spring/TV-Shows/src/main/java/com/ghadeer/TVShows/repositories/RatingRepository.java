package com.ghadeer.TVShows.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ghadeer.TVShows.models.Rating;
import com.ghadeer.TVShows.models.Show;

@Repository
public interface RatingRepository extends CrudRepository<Rating, Long>{
	List<Rating> findAll();
	List<Rating> findByShowOrderByValueAsc(Show show);
}