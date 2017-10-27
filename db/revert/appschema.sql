-- Revert forum:appschema from pg

BEGIN;

DROP SCHEMA forum;

COMMIT;
