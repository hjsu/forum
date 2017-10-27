-- Revert forum:categories from pg

BEGIN;

DROP TABLE categories;

COMMIT;
