package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.model.Police;

@Repository
public interface IPoliceDao extends JpaRepository<Police, Integer>  {

}
