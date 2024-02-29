DROP TRIGGER IF EXISTS delete_police;
-- Change the delimiter to avoid conflicts with semicolons inside the trigger definition
DELIMITER $$

CREATE TRIGGER delete_police AFTER DELETE ON police
FOR EACH ROW

BEGIN
    -- Delete the corresponding entry from the `login` table where the `username` matches the deleted police entry's username
    DELETE FROM login 
    WHERE username = OLD.username AND role_id = 3;
END$$

-- Reset the delimiter back to semicolon
DELIMITER ;
