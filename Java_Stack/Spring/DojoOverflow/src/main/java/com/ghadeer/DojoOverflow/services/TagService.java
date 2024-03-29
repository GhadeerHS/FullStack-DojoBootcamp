package com.ghadeer.DojoOverflow.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.ghadeer.DojoOverflow.models.Tag;
import com.ghadeer.DojoOverflow.repositories.TagRepository;

@Service
public class TagService {
	private final TagRepository tagRepository;

	public TagService(TagRepository tagRepository) {
		this.tagRepository = tagRepository;
	}

	public List<Tag> allTags() {
		return this.tagRepository.findAll();
	}
	
	public List<Tag> questionTags(Integer id) {
		return this.tagRepository.findAllByQuestions(id);
	}
	
	public Tag findTagMatch(String s) {
		return this.tagRepository.findBySubject(s);
	}

	public Tag createTag(Tag t) {
		return this.tagRepository.save(t);
	}

	public Tag findTag(Integer id) {
		Optional<Tag> optionalTag = this.tagRepository.findById(id);
		if(optionalTag.isPresent()) {
			return optionalTag.get();
		} else {
			return null;
		}
	}
}