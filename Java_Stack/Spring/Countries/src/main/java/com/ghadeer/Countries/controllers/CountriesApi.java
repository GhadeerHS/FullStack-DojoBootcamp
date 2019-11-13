package com.ghadeer.Countries.controllers;


import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ghadeer.Countries.services.ApiService;

@RestController
public class CountriesApi {
	public final ApiService apiService;
	
	public CountriesApi(ApiService apiService) {
		this.apiService = apiService;
	}

	@RequestMapping("/")
	public List<Object[]> dashboard() {
		return apiService.results();
	}
	
}