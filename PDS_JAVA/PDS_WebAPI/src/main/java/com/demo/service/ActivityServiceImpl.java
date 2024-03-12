package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

import com.demo.dao.IActivityDao;
import com.demo.model.Activity;


@Service
public class ActivityServiceImpl implements IActivityService {

	@Autowired
	 private IActivityDao adao;

	@Override
	public List<Activity> getallactivities() {
		return adao.findAll();

	}

	@Override
	public void addnewactivity(Activity p) {
		adao.save(p);
		
	}

	@Override
	public Activity getById(int pid) {
		 Optional<Activity> op = adao.findById(pid);
		 if(op.isPresent()) {
			 return op.get();
		 }
		 return null;
	}

	@Override
	public void updateById(Activity activity) {
		Optional<Activity> op=adao.findById(activity.getAc_id());
		if(op.isPresent()) {
			Activity p = op.get();
			p.setName(activity.getName());
			p.setLocation(activity.getLocation());
			p.setShift_time(activity.getShift_time());
			adao.save(p);
			
		}		
	}

	@Override
	public void deleteById(int id) {
		adao.deleteById(id);
		
	}

//	@Override
//	public List<Activity> getByPrice(int lpr, int hpr) {
//		List<Activity> plist = adao.findbyPrice(lpr,hpr);
//		System.out.println(plist);
//		return plist;
//	}
	

//    public Activity getActivityInfoByPid(int pid) {
//        return adao.getActivityInfoByPid(pid);
//    }

//	@Override
//	public List<Activity> getactivitynames() {
//		return ;
//	}
//	
}
