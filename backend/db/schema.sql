CREATE TABLE links (num INTEGER PRIMARY KEY, link TEXT, id TEXT, created_by TEXT, stats TEXT);
CREATE TABLE users (num INTEGER PRIMARY KEY, username TEXT, passhash TEXT, key TEXT);
