package com.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.ILoginDao;
import com.demo.dao.IPoliceDao;
import com.demo.model.Activity;
import com.demo.model.Login;
import com.demo.model.Police;

@Service
public class PoliceServiceImpl implements IPoliceService{
	
	@Autowired
	 private IPoliceDao pdao;
	
	@Autowired
	 private ILoginDao ldao;

	@Override
	public List<Police> getallpolice() {
		return pdao.findAll();
	}

	@Override
	public void addnewpolice(Police p) {
		pdao.save(p);	
	}
	


	@Override
	public Police getById(int pid) {
		 Optional<Police> op = pdao.findById(pid);
		 if(op.isPresent()) {
			 return op.get();
		 }
		 return null;
	}

	@Override
	public void updateById(Police police) {

		Optional<Police> op=pdao.findById(police.getPid());
		if(op.isPresent()) {
			Police p = op.get();
			p.setPid(police.getPid());
			p.setBelt_no(police.getBelt_no());
			p.setName(police.getName());
			p.setEmail_id(police.getEmail_id());
			p.setDesg(police.getDesg());
			p.setDept(police.getDept());
			p.setMobile(police.getMobile());
			p.setUsername(police.getUsername());
			p.setPassword(police.getPassword());
            p.setDuty(police.getDuty());		
			pdao.save(p);
			
		}
	}

	@Override
	public void deleteById(int id) {
		pdao.deleteById(id);
		
	}


	@Override
	public List<Police> getByPrice(int lpr, int hpr) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String loginPolice(Login login) {
		
		Login ad = ldao.getpolice(login.getUsername());
		
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
			return "Police does not exist";
		}
	}

	@Override
	public List<Police> getPolicesByActivity(int ac_id) {
        return pdao.findByActivityId(ac_id);

	}

//	@Override
//	public List<Police> findAll() {
//		// TODO Auto-generated method stub
//		return pdao.findAll();
//	}

//	@Override
//	public List<Police> getByPrice(int lpr, int hpr) {
//		List<Police> plist = pdao.findbyPrice(lpr,hpr);
//		System.out.println(plist);
//		return plist;
//	}
	

}
