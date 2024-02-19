package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.model.Leave;

@Repository
public interface ILeaveDao extends JpaRepository<Leave,Integer> {

}
