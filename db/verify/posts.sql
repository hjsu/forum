-- Verify forum:posts on pg

BEGIN;

SELECT id, topic_id, user_id, body, created_at, updated_at
    FROM posts
WHERE FALSE;

ROLLBACK;
