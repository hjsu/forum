-- Revert forum:posts from pg

BEGIN;

DROP TABLE posts;

COMMIT;
