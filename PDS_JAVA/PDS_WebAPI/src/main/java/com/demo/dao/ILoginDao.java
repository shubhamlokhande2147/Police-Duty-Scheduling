package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.model.Login;

@Repository
public interface ILoginDao extends JpaRepository<Login,Integer> {
	
	
	@Query("select l from Login l where username like :uname and password like :passwd")
	public Login validateUser(String uname, String passwd); 
	
}
