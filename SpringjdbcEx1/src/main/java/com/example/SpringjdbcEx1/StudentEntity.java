package com.example.SpringjdbcEx1;

public class StudentEntity {

	private int id;
	private String stu_name;
	private int stu_reg;
	private String stu_dept;
	

	public StudentEntity() {
		
	}

//parameterized constructor with id
	public StudentEntity(int id, String stu_name, int stu_reg, String stu_dept) {
		super();
		this.id = id;
		this.stu_name = stu_name;
		this.stu_reg = stu_reg;
		this.stu_dept = stu_dept;
	}

	//parameterized constructor without id
	public StudentEntity(String stu_name, int stu_reg, String stu_dept) {
		super();
		this.stu_name = stu_name;
		this.stu_reg = stu_reg;
		this.stu_dept = stu_dept;
	}

	//create getters and setters || right click on work area source > GIVE getters and setters
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getStu_name() {
		return stu_name;
	}

	public void setStu_name(String stu_name) {
		this.stu_name = stu_name;
	}

	public int getStu_reg() {
		return stu_reg;
	}

	public void setStu_reg(int stu_reg) {
		this.stu_reg = stu_reg;
	}

	public String getStu_dept() {
		return stu_dept;
	}

	public void setStu_dept(String stu_dept) {
		this.stu_dept = stu_dept;
	}
	
//CREATE TOSTRING > RIGHTCLICK ON WORK AREA source > toString
	@Override
	public String toString() {
		return "StudentEntity [id=" + id + ", stu_name=" + stu_name + ", stu_reg=" + stu_reg + ", stu_dept=" + stu_dept
				+ "]";
	}
	
	
}


