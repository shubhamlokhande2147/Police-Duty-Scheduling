package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.model.Police;

@Repository
public interface IPoliceDao extends JpaRepository<Police, Integer>  {

	
	 // @Query(value = "SELECT * FROM Police WHERE ac_id = ?1", nativeQuery = true)
	  
	//here, add here, duty== "Unfixed"
	
	@Query(value = "SELECT p.* FROM Police p " +
            "JOIN police_leave pl ON p.pid = pl.pid " +
            "WHERE p.ac_id = ?1 AND pl.status = 0", nativeQuery = true)

	List<Police> findByActivityId(int ac_id);

	//	List<Police> findByActivityId(int ac_id);

}
