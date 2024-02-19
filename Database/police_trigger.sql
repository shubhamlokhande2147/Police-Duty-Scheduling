drop trigger if exists police_data;
delimiter $
create trigger police_data before 
insert on police for each row
begin 
    insert into login(username,password,role_id) values(New.username,New.password,3);
end $
delimiter;
