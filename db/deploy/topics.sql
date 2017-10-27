-- Deploy forum:topics to pg
-- requires: forums

BEGIN;

CREATE TABLE topics (
    id SERIAL PRIMARY KEY,
    forum_id INTEGER REFERENCES forums,
    user_id INTEGER REFERENCES users,
    title VARCHAR(100) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON topics
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

COMMIT;
