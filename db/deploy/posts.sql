-- Deploy forum:posts to pg
-- requires: posts
-- requires: users

BEGIN;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    topic_id INTEGER REFERENCES topics,
    user_id INTEGER REFERENCES users,
    body TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON posts
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

COMMIT;
