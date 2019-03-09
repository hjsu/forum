-- Revert forum:1-rename-parent-forum-col from pg

BEGIN;

ALTER TABLE forums
RENAME parent_forum_id to parent_forum

COMMIT;
