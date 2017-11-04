#!/bin/sh
 (echo "BEGIN;"; \
 cat ./db/seeds/development/reset.sql; \
 cat ./db/seeds/development/users.sql; \
 cat ./db/seeds/development/categories.sql; \
 cat ./db/seeds/development/forums.sql; \
 cat ./db/seeds/development/topics.sql; \
 cat ./db/seeds/development/posts.sql; \
 echo "COMMIT;") \
 | psql --host $PGHOST $PGDATABASE -U $PGUSER 

#eof