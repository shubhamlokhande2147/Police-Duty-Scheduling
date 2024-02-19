package com.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.IActivityDao;
import com.demo.dao.IAttendance_MasterDao;
import com.demo.dao.ILoginDao;
import com.demo.model.Activity;
import com.demo.model.Attendance_Master;
import com.demo.model.Login;

@Service
public class Attendance_MasterServiceImpl implements IAttendance_MasterService {

	@Autowired
	 private IAttendance_MasterDao adao;

	@Autowired
	 private ILoginDao ldao;
		
	
	@Override
	public List<Attendance_Master> getallattendance_masters() {
		return adao.findAll();

	}

	@Override
	public void addnewattendance_master(Attendance_Master p) {
		adao.save(p);
		
	}

	@Override
	public Attendance_Master getById(int pid) {
		 Optional<Attendance_Master> op = adao.findById(pid);
		 if(op.isPresent()) {
			 return op.get();
		 }
		 return null;
	}

	@Override
	public void updateById(Attendance_Master am) {
		Optional<Attendance_Master> op=adao.findById(am.getAm_id());
		if(op.isPresent()) {
			Attendance_Master p = op.get();
			
			p.setBelt_no(am.getBelt_no());
			p.setName(am.getName());
			p.setEmail_id(am.getEmail_id());
			p.setMobile(am.getMobile());
			p.setUsername(am.getUsername());
			p.setPassword(am.getPassword());
			adao.save(p);
			
		}		
	}

	@Override
	public void deleteById(int id) {
		adao.deleteById(id);
		
	}

	@Override
	public List<Attendance_Master> getByPrice(int lpr, int hpr) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String loginam_master(Login login) {
       
		Login ad = ldao.getam_master(login.getUsername());
		
		if(ad != null)
		{
			if(login.getPassword().equals(ad.getPassword()))
			{
					return "Login Success ";
			}
			else
			{
				return "Login Fail ";
			}
		}
		else
		{
			return "Am_Master does not exist";
		}
	}

	

}
