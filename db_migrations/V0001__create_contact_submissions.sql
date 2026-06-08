CREATE TABLE contact_submissions (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);