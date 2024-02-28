-- Drop the trigger if it exists
DROP TRIGGER IF EXISTS delete_police;

-- Change the delimiter to avoid conflicts with semicolons inside the trigger definition
DELIMITER $$

-- Create the trigger
CREATE TRIGGER delete_police AFTER DELETE ON police
FOR EACH ROW
BEGIN
    -- Delete the corresponding entry from the `login` table where the `username` matches the deleted police entry's username
    DELETE FROM login 
    WHERE username = OLD.username;
END$$

-- Reset the delimiter back to semicolon
DELIMITER ;
