package com.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.demo.model.Attendance_Master;
import com.demo.model.Login;

@Service
public interface IAttendance_MasterService {

	List<Attendance_Master> getallattendance_masters();

	void addnewattendance_master(Attendance_Master p);

	Attendance_Master getById(int pid);

	void updateById(Attendance_Master am);

	void deleteById(int id);

	List<Attendance_Master> getByPrice(int lpr, int hpr);
	
	String loginam_master(Login login);

	
}
