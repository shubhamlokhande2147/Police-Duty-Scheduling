package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.model.Attendance_Master;

import net.bytebuddy.dynamic.DynamicType.Builder.FieldDefinition.Optional;

public interface IAttendance_MasterDao  extends JpaRepository<Attendance_Master, Integer> {
  


}
