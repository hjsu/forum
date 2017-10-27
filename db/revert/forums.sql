-- Revert forum:forums from pg

BEGIN;

DROP TABLE forums;

COMMIT;
