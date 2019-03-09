-- Deploy forum:1-rename-parent-forum-col to pg

BEGIN;

ALTER TABLE forums
RENAME parent_forum to parent_forum_id;

COMMIT;
