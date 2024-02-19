package com.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.ILeaveDao;
import com.demo.model.Leave;
import com.demo.model.Police;

@Service
public class LeaveServiceImpl implements ILeaveService {

	@Autowired
	private ILeaveDao ldao;
	
	@Override
	public List<Leave> getalleaves() {
		return ldao.findAll();

	}

	@Override
	public void addnewleave(Leave p) {
		ldao.save(p);		
	}

	@Override
	public Leave getById(int lvId) {
		 Optional<Leave> op = ldao.findById(lvId);
		 if(op.isPresent()) {
			 return op.get();
		 }
		 return null;
	}

	@Override
	public void updateById(Leave am) {
		Optional<Leave> op=ldao.findById(am.getLvId());
		if(op.isPresent()) {
			Leave p = op.get();
           p.setLvId(am.getLvId());
		   p.setFromDate(am.getFromDate());
		   p.setToDate(am.getToDate());
		   p.setReason(am.getReason());
		   p.setStatus(am.isStatus());
		   ldao.save(p);	
		}		
	}

	@Override
	public void deleteById(int lvId) {
		ldao.deleteById(lvId);
		
	}

	@Override
	public List<Leave> getByPrice(int lpr, int hpr) {
		// TODO Auto-generated method stub
		return null;
	}

}
