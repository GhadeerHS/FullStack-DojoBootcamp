package com.ghadeer.TVShows.repositories;


import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ghadeer.TVShows.models.Show;

@Repository
public interface ShowRepository extends CrudRepository<Show, Long> {
	List<Show> findAll();
	Show findByTitle(String title);
}