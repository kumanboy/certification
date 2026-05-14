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


CREATE TABLE IF NOT EXISTS questions (
                                         id INTEGER PRIMARY KEY,
                                         question_text TEXT NOT NULL,
                                         question_type TEXT NOT NULL,
                                         options_json JSONB,
                                         correct_answer TEXT,
                                         image_url TEXT,
                                         points NUMERIC(5,2) DEFAULT 0,
                                         match_json JSONB,
                                         parts_json JSONB,
                                         diagram4_json JSONB,
                                         sort_order INTEGER NOT NULL DEFAULT 0,
                                         is_active BOOLEAN NOT NULL DEFAULT TRUE,
                                         created_at TIMESTAMPTZ DEFAULT now(),
                                         updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_questions_sort_order
    ON questions(sort_order ASC);

CREATE INDEX IF NOT EXISTS idx_questions_is_active
    ON questions(is_active);