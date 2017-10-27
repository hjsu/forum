-- Verify forum:topics on pg

BEGIN;

SELECT id, forum_id, user_id, title, created_at, updated_at
    FROM topics
WHERE FALSE;

ROLLBACK;
