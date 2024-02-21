package com.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.IDuty_HistoryDao;
import com.demo.model.Duty_History;

@Service
public class Duty_HistoryServiceImpl implements IDuty_HistoryService {

	@Autowired
	private IDuty_HistoryDao ddao;
	
	@Override
	public void deleteById(int dh_id) {
		ddao.deleteById(dh_id);

	}

	@Override
	public void updateById(Duty_History p) {

		Optional<Duty_History> op=ddao.findById(p.getDh_id());
		if(op.isPresent()) {
			Duty_History dh = op.get();
			
			dh.setDh_date(p.getDh_date());
	
			ddao.save(dh);		
	   }
	}

	@Override
	public void addnewduty(Duty_History p) {
             ddao.save(p);		
	}

	@Override
	public Duty_History getById(int dh_id) {
		 Optional<Duty_History> op = ddao.findById(dh_id);
		 if(op.isPresent()) {
			 return op.get();
		 }
		 return null;
	}

	@Override
	public List<Duty_History> getallduties() {
      return ddao.findAll();
	}

}
