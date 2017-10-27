-- Verify forum:forums on pg

BEGIN;

SELECT id, name, description, parent_forum, category_id, created_at, updated_at
  FROM forums
 WHERE FALSE;

ROLLBACK;
