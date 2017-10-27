-- Deploy users to pg
-- requires: appschema
CREATE OR REPLACE FUNCTION trigger_set_timestamp()  
RETURNS TRIGGER AS $$  
BEGIN  
  NEW.updated_at = NOW();
  RETURN NEW;
END;  
$$ LANGUAGE plpgsql;

BEGIN;

SET client_min_messages = 'warning';

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(20) UNIQUE NOT NULL,
    password VARCHAR(30) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    display_name VARCHAR(30) UNIQUE NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE on users
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

COMMIT;
