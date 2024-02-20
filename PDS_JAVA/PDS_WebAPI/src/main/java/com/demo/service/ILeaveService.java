package com.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.demo.model.Leave;
import com.demo.model.Police;

@Service
public interface ILeaveService {

	List<Leave> getalleaves();

	void addnewleave(Leave p);


	Leave getById(int lvId);

	void updateById(Leave am);

	void deleteById(int lvId);

	List<Leave> getByPrice(int lpr, int hpr);

	void updateStatus(int lvId);


	//List<Police> findAll();
	
}
