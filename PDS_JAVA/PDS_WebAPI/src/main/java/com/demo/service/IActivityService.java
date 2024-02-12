package com.demo.service;
import java.util.List;

import org.springframework.stereotype.Service;

import com.demo.model.Activity;

@Service
public interface IActivityService {

	List<Activity> getallactivities();

	void addnewactivity(Activity p);

	Activity getById(int pid);

	void updateById(Activity activity);

	void deleteById(int id);

	List<Activity> getByPrice(int lpr, int hpr);
	
}

