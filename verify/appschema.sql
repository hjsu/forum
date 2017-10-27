-- Verify forum:appschema on pg

BEGIN;

SELECT pg_catalog.has_schema_privilege('forum', 'usage');

ROLLBACK;
