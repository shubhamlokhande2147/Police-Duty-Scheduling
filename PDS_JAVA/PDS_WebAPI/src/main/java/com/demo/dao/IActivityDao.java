package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.demo.model.Activity;

@Repository
public interface IActivityDao extends JpaRepository<Activity, Integer> {

	
    @Query(value="select * from producttab11 where price between :lpr and :hpr",nativeQuery = true)
	//@Query(value="select p from Product p where price between :lpr and :hpr")
	List<Activity> findbyPrice(int lpr, int hpr);
    
}
