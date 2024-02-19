package com.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.demo.model.Admin;

@Service
public interface IAdminService {
 

	List<Admin> getalladmin();

	void addnewadmin(Admin p);

	Admin getById(int pid);

	void updateById(Admin am);

	void deleteById(int id);

	List<Admin> getByPrice(int lpr, int hpr);

	
}
