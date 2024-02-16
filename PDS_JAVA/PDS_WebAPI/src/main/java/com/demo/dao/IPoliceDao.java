package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.model.Police;

public interface IPoliceDao extends JpaRepository<Police, Integer>  {

}
