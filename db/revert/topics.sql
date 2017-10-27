-- Revert forum:topics from pg

BEGIN;

DROP TABLE topics;

COMMIT;
