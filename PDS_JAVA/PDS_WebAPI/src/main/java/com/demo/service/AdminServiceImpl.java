package com.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.model.Admin;
import com.demo.model.Login;
import com.demo.dao.IAdminDao;
import com.demo.dao.ILoginDao;

@Service
public class AdminServiceImpl implements IAdminService{

	@Autowired
	 private IAdminDao adao;
	
	@Autowired
	 private ILoginDao ldao;
		
	
	@Override
	public List<Admin> getalladmin() {
		return adao.findAll();

	}

	@Override
	public void addnewadmin(Admin p) {
		adao.save(p);	
		
	}

	@Override
	public Admin getById(int pid) {
		 Optional<Admin> op = adao.findById(pid);
		 if(op.isPresent()) {
			 return op.get();
		 }
		 return null;
	}

	@Override
	public void updateById(Admin am) {

		Optional<Admin> op=adao.findById(am.getAd_id());
		if(op.isPresent()) {
			Admin a = op.get();
			a.setAd_id(am.getAd_id());
			a.setUsername(am.getUsername());
			a.setPassword(am.getPassword());
			adao.save(a);	
		}		
	}

	
	
	
	@Override
	public void deleteById(int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Admin> getByPrice(int lpr, int hpr) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String loginAdmin(Login login) {
       
		Login ad = ldao.getadmin(login.getUsername());
		
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
			return "Admin does not exist";
		}

	}

}
