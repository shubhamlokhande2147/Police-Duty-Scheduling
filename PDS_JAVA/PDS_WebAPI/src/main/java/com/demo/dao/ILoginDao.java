package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.demo.model.Admin;
import com.demo.model.Login;
import com.demo.model.Police;

@Repository
public interface ILoginDao extends JpaRepository<Login,Integer> {
	
	
//	@Query("select l from Login l where username like :uname and password like :passwd")
//	public Login validateUser(String uname, String passwd); 
//	
//	
//	@Query(value=select role_id from Login where username:usernm AND password:pass,nativequery =true)
//    int getrole_id(String usernm,String pass);
	
	@Query(value = "SELECT role_id FROM Login WHERE username = ?1 AND password = ?2", nativeQuery = true)
	int getRoleId(String usernm, String pass);
	
	@Query(value = "SELECT * FROM Login where username = ?1 ", nativeQuery = true)
    Login getadmin(String usernm);
	
	@Query(value = "SELECT * FROM Login where username = ?1 ", nativeQuery = true)
    Login getam_master(String usernm);
	
	@Query(value = "SELECT * FROM Login where username = ?1 ", nativeQuery = true)
    Login getpolice(String usernm);
	
	    @Query("SELECT p.pid FROM Police p WHERE p.username = :username AND p.password = :password")
	    Integer findPidByUsernameAndPassword(@Param("username") String username, @Param("password") String password);

		
	
	
	
}
