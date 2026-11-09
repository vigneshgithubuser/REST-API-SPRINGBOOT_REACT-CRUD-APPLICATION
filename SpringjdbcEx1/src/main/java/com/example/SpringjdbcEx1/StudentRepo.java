package com.example.SpringjdbcEx1;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository 
public class StudentRepo implements StudentDao{

	@Autowired
	private JdbcTemplate jt; //add jdbc template
	
	@Override
	public int save(StudentEntity s) {
		// TODO Auto-generated method stub // update code
		return jt.update("insert into studentdet(stu_name,stu_reg,stu_dept) values(?,?,?)",
				new Object[] {s.getStu_name(),s.getStu_reg(),s.getStu_dept()});
	}

	@Override
	public List<StudentEntity> findall() {
		// TODO Auto-generated method stub //select code - query
		return jt.query("select *from studentdet",
				new BeanPropertyRowMapper<StudentEntity>(StudentEntity.class)); //import beanpropertyroadmapper
	}

	@Override
	public StudentEntity findbyid(int id) {
		// TODO Auto-generated method stub
		return jt.queryForObject("select *from studentdet where id=?", 
				new BeanPropertyRowMapper<StudentEntity>(StudentEntity.class),id);
	}

//	@Override
//	public int updatebyid(StudentEntity s, int id) {
//		// TODO Auto-generated method stub //update query - entha field update pannaporomnu sollidamnum
//		return jt.update("update studentdet set stu_dept=? where id=?",
//				new Object[] {s.getStu_dept(),id});
//	}
	
	@Override
	public int updatebyid(StudentEntity s, int id) {
	    return jt.update(
	        "update studentdet set stu_name = ?, stu_reg = ?, stu_dept = ? where id = ?",
	        new Object[] { s.getStu_name(), s.getStu_reg(), s.getStu_dept(), id }
	    );
	}

	@Override
	public int deletebyid(int id) {
		// TODO Auto-generated method stub
		return jt.update("delete from studentdet where id=?",id);
	}

}
