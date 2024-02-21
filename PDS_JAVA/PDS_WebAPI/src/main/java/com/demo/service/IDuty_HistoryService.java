package com.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.demo.model.Duty_History;
import com.demo.model.Police;

@Service
public interface IDuty_HistoryService {

	void deleteById(int dh_id);

	void updateById(Duty_History p);

	void addnewduty(Duty_History p);

	Duty_History getById(int dh_id);
	
	List<Duty_History> getallduties();




}
