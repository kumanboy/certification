// lib/db.ts
import { Pool } from "pg";

const pool = new Pool({
    host: process.env.PGHOST || "localhost",
    port: Number(process.env.PGPORT || 5432),
    user: process.env.PGUSER || "postgres",
    password: process.env.PGPASSWORD || "0011",
    database: process.env.PGDATABASE || "examdb",
    ssl: process.env.PGSSL === "true" ? { rejectUnauthorized: false } : false,
    max: 5,
    idleTimeoutMillis: 30_000,
});

export { pool };
