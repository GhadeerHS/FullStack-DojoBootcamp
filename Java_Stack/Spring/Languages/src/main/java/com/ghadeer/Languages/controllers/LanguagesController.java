package com.ghadeer.Languages.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.ghadeer.Languages.models.Language;
import com.ghadeer.Languages.services.LanguageService;

@Controller
public class LanguagesController {
	private final LanguageService languageService;

	public LanguagesController(LanguageService languageService) {
		this.languageService = languageService;
	}
	
	@RequestMapping("/languages")
	public String index(Model model) {
		List<Language> languages = languageService.allLanguages();
		model.addAttribute("languages", languages);
		model.addAttribute("language", new Language());
		return "/languages/index.jsp";
	}
	
	@RequestMapping("/languages/{id}")
	public String show(@PathVariable("id") Long id, Model model) {
		Language language = languageService.findLanguage(id);
		model.addAttribute("language", language);
		return "/languages/show.jsp";
	}
	
	@RequestMapping(value="/languages", method=RequestMethod.POST)
	public String create(@Valid @ModelAttribute("language") Language language, BindingResult result, Model model) {
		if(result.hasErrors()) {
			List<Language> languages = languageService.allLanguages();
			model.addAttribute("languages", languages);
			return "/languages/index.jsp";
		} else {
			languageService.createLanguage(language);
			return "redirect:/languages";
		}
	}
	
	@RequestMapping("/languages/{id}/edit")
	public String edit(@PathVariable("id") Long id, Model model) {
		Language language = languageService.findLanguage(id);
		model.addAttribute("language", language);
		return "/languages/edit.jsp";
	}

	@RequestMapping("/languages/{id}/update")
	public String update(@Valid @ModelAttribute("language") Language language, BindingResult result) {
		if(result.hasErrors()) {
			return "/languages/edit.jsp";
		} else {
			languageService.updateLanguage(language);
			return "redirect:/languages";
		}
	}

	@RequestMapping("/languages/{id}/delete")
	public String delete(@PathVariable("id") Long id) {
		languageService.deleteLanguage(id);
		return "redirect:/languages";
	}
}
