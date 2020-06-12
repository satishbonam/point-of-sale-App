CREATE DATABASE pos_app;
USE pos_app;
create table category( id int not null auto_increment, name varchar(255), primary key(id));
create table vendor( id int not null auto_increment, name varchar(255) not null, mobile varchar(255) not null, auth_id int, category_id int, primary key(id), foreign key(auth_id) references auth(id), foreign key(category_id) references category(id));
create table stocks( id int not null auto_increment, title varchar(255) not null, price int not null, stock int not null, status varchar(255) not null, category_id int, primary key(id), foriegn key(category_id) references category(id));
create table bills( id int not null auto_increment, amount int not null, generated_at datetime, generated_by int, primary key(id),foreign key(generated_by) references auth(id);
create table auth( id int not null auto_increment, email varchar(255) not null,password varchar(255) not null,role varchar(255) not null,primary key(id);


insert into auth (email, password, role) values ('satish.b.s.kumar@gmail.com', 'satish', 'admin');
insert into auth (email, password, role) values ('satish@gmail.com', 'satish', 'employee');
insert into auth (email, password, role) values ('satishkumar@gmail.com', 'satish', 'vendor');
insert into auth (email, password, role) values ('phebbes0@apache.org', 'rLug7ddaY', 'vendor');
insert into auth (email, password, role) values ('dkonzelmann1@ask.com', '837x47hGficv', 'vendor');
insert into auth (email, password, role) values ('gmckniely2@sogou.com', 'sfXUKYaq', 'vendor');
insert into auth (email, password, role) values ('tbuye3@etsy.com', '12yEFwRQ0H', 'vendor');
insert into auth (email, password, role) values ('blawlings4@lulu.com', 'SK6vLT', 'vendor');
insert into auth (email, password, role) values ('rhand5@youtube.com', 'hkO2IGHyUR', 'vendor');
insert into auth (email, password, role) values ('cmarrian6@miibeian.gov.cn', 'Mo8ZlQt', 'vendor');
insert into auth (email, password, role) values ('ktomasini7@nature.com', 'opuh3Q', 'vendor');
insert into auth (email, password, role) values ('mtullett8@paypal.com', 'ChBnTrAqyal', 'vendor');
insert into auth (email, password, role) values ('msammars9@tinyurl.com', 'dnD3Z3', 'vendor');

insert into category (name) values ('augue');
insert into category (name) values ('tristique');
insert into category (name) values ('turpis');
insert into category (name) values ('massa');
insert into category (name) values ('scelerisque');
insert into category (name) values ('lacinia');
insert into category (name) values ('dapibus');
insert into category (name) values ('venenatis');
insert into category (name) values ('nisl');
insert into category (name) values ('massa');
insert into category (name) values ('messi');

