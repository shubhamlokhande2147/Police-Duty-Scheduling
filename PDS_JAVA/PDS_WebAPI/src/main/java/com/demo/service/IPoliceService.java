package com.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.demo.model.Police;

@Service
public interface IPoliceService {

	
	List<Police> getallpolice();

	void addnewpolice(Police p);

	Police getById(int pid);

	void updateById(Police am);

	void deleteById(int id);

	List<Police> getByPrice(int lpr, int hpr);

//	List<Police> findAll();
}
