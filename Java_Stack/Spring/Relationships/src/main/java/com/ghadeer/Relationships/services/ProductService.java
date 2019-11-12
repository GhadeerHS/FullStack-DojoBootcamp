package com.ghadeer.Relationships.services;

import java.util.List;
import java.util.Locale.Category;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.ghadeer.Relationships.models.Product;
import com.ghadeer.Relationships.repositories.ProductRepository;

@Service
public class ProductService {
	private final ProductRepository productRepository;

	public ProductService(ProductRepository productRepository) {
		this.productRepository = productRepository;
	}
	
	public List<Product> allProducts() { 
		return this.productRepository.findAll();
	}
	
	public Product createProduct(Product p) {
		return this.productRepository.save(p);
	}
	
	public Product addCategory(Product p, Category c) {
		p.getCategories().add(c);
		return this.productRepository.save(p);
	}
	
	public Product findProduct(Long id) {
		Optional<Product> optionalProduct = this.productRepository.findById(id);
		if(optionalProduct.isPresent()) {
			return optionalProduct.get();
		} else {
			return null;
		}
	}
}