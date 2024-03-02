-- Drop the trigger if it exists
DROP TRIGGER IF EXISTS update_police;

-- Change the delimiter to avoid conflicts with semicolons inside the trigger definition
DELIMITER $$

-- Create the trigger
CREATE TRIGGER update_police AFTER UPDATE ON police
FOR EACH ROW
BEGIN
    UPDATE login 
    SET role_id = 3 
    WHERE username = OLD.username AND password = OLD.password;
END$$
DELIMITER ;
