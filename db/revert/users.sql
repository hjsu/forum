-- Revert users from pg

BEGIN;

DROP TABLE users;

COMMIT;
