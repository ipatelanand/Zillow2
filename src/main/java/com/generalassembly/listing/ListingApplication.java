package com.generalassembly.listing;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.beans.factory.annotation.Autowired;

@SpringBootApplication
@RestController
public class ListingApplication {
	@Autowired
	private ListingRepository listingRepository;

	public static void main(String[] args) {
		SpringApplication.run(ListingApplication.class, args);
	}

	@GetMapping("/listing")
	public Iterable<Listing> index() {
		return listingRepository.findAll();
	}

	@PostMapping("/listing")
	public Iterable<Listing> create (@RequestBody Listing listingData) {
		listingRepository.save(listingData);
		return listingRepository.findAll();
	}

	@DeleteMapping("/listing/{id}")
	public Iterable<Listing> delete(@PathVariable int id) {
		listingRepository.deleteById(id);
		return listingRepository.findAll();
	}

	@PutMapping("/listing/{id}")
	public Iterable<Listing> update(@PathVariable int id, @RequestBody Listing listingData) {
		listingData.setId(id);
		listingRepository.save(listingData);
		return listingRepository.findAll();
	}

}
