-- Verify forum:users on pg

BEGIN;

SELECT id, user_name, password, email, display_name, created_at, updated_at
  FROM users
 WHERE FALSE;

ROLLBACK;
