package com.example.SpringjdbcEx1;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin("http://localhost:3000")


@RestController
public class StudentController {

	@Autowired
	private StudentDao sdao;
	
	@PostMapping("/student")
	public String save(@RequestBody StudentEntity s)
	{
		return sdao.save(s)+" records stored";
	}
	
	
	@GetMapping("/student")
	public List<StudentEntity> selectall()
	{
		return sdao.findall();
	}
	
	@GetMapping("/student/{id}")
	public StudentEntity search(@PathVariable int id)
	{
		return sdao.findbyid(id);
	}
	 
	@PutMapping("/student/{id}") //update code	
	public String update(@RequestBody StudentEntity s,@PathVariable int id)
	{
		return sdao.updatebyid(s, id)+" updated";
	}
	
	@DeleteMapping("/student/{id}")
	public String delete(@PathVariable int id)
	{
		return sdao.deletebyid(id)+" deleted";
	}
	
	
}

