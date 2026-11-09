package com.example.SpringjdbcEx1;

import java.util.List;

public interface StudentDao {
//crud operation
	public int save(StudentEntity s); //For save (insert)
	public List<StudentEntity> findall(); //get list of records (select - select the record)
	public StudentEntity findbyid(int id); // get single record by id (select - search the record)
	public int updatebyid(StudentEntity s,int id); //upate record by id(update)
	public int deletebyid(int id); // get only integer (delete)
}
 