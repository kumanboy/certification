CREATE TABLE IF NOT EXISTS attempts (
                                        id SERIAL PRIMARY KEY,
                                        first_name TEXT NOT NULL,
                                        last_name TEXT NOT NULL,
                                        total_percent INTEGER NOT NULL,
                                        grade TEXT NOT NULL,
                                        answers_json JSONB,
                                        created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_attempts_created_at
    ON attempts(created_at DESC);
