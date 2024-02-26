-- Drop the trigger if it exists
DROP TRIGGER IF EXISTS update_admin;

-- Change the delimiter to avoid conflicts with semicolons inside the trigger definition
DELIMITER $$

-- Create the trigger
CREATE TRIGGER update_admin AFTER UPDATE ON admin
FOR EACH ROW
BEGIN
    -- Update the `role_id` in the `login` table where the `username` and `password` match
    UPDATE login 
    SET role_id = 1 
    WHERE username = OLD.username AND password = OLD.password;
END$$

-- Reset the delimiter back to semicolon
DELIMITER ;
