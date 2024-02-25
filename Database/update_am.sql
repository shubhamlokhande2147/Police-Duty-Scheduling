-- Drop the trigger if it exists
DROP TRIGGER IF EXISTS update_am;

-- Change the delimiter to avoid conflicts with semicolons inside the trigger definition
DELIMITER $$

-- Create the trigger
CREATE TRIGGER update_am AFTER UPDATE ON police
FOR EACH ROW
BEGIN
    -- Update the `role_id` in the `login` table where the `username` and `password` match
    UPDATE login 
    SET role_id = 2
    WHERE username = OLD.username AND password = OLD.password;
END$$

-- Reset the delimiter back to semicolon
DELIMITER ;
