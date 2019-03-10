-- Verify forum:1-rename-parent-forum-col on pg

BEGIN;

SELECT parent_forum_id from forums
WHERE FALSE;

ROLLBACK;
