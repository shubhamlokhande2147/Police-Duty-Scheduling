package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.demo.model.Activity;

@Repository
public interface IActivityDao extends JpaRepository<Activity, Integer> {

	
   // @Query(value="select * from producttab11 where price between :lpr and :hpr",nativeQuery = true)
	//@Query(value="select p from Product p where price between :lpr and :hpr")
	//List<Activity> findbyPrice(int lpr, int hpr);
    
    //@Query(value="SELECT a.name, a.location, a.shift " + "FROM Activity a " +  "INNER JOIN a.polices p"+ "WHERE p.pid = :pid",nativeQuery = true)
   // Activity getActivityInfoByPid(int pid);
//    
//    public Activity getActivityInfoByPid(int pid) {
//        String queryString = "SELECT a.name, a.location, a.shift " +
//                             "FROM Activity a " +
//                             "INNER JOIN a.polices p " +
//                             "WHERE p.pid = :pid";
//
//        Query query = entityManager.createQuery(queryString)
//                                   .setParameter("pid", pid);
//
//        Object[] result = (Object[]) query.getSingleResult();
//
//        Activity activityInfo = new Activity();
//        activityInfo.setName((String) result[0]);
//        activityInfo.setLocation((String) result[1]);
//        activityInfo.setShift((String) result[2]);
//
//        return activityInfo;
//    }
//    
    
    
//
//    @PersistenceContext
//    private EntityManager entityManager;
//
//    public Activity getActivityInfoByPid(int pid) {
//        String queryString = "SELECT a.name, a.location, a.shift " +
//                             "FROM Activity a " +
//                             "INNER JOIN a.polices p " +
//                             "WHERE p.pid = :pid";
//
//        Query query = entityManager.createQuery(queryString)
//                                   .setParameter("pid", pid);
//
//        Object[] result = (Object[]) query.getSingleResult();
//
//        if (result != null && result.length == 3) {
//        	Activity activityInfo = new Activity();
//            activityInfo.setName((String) result[0]);
//            activityInfo.setLocation((String) result[1]);
//            activityInfo.setShift((String) result[2]);
//            return activityInfo;
//        } else {
//            return null; // Handle the case where no activity is found for the given pid
//        }
//    }
    
    
}
