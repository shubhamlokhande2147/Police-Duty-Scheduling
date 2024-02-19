drop trigger if exists am_data;
delimiter$
create trigger am_data before 
insert on attendance_master for each row
begin 
    insert into login(username,password,role_id) values(New.username,New.password,2);
end $
delimiter;
