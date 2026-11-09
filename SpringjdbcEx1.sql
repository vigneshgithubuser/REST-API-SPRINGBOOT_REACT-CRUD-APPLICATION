create database demodb;
create database student;
use student;
create table studentdet(id int primary key auto_increment, stu_name varchar(20),stu_reg int unique key,stu_dept varchar(20));