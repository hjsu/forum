-- Deploy forum:forums to pg
-- requires: forums

BEGIN;

CREATE TABLE forums (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    parent_forum integer references forums,
    category_id integer references categories,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON forums
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

COMMIT;

