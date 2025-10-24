// lib/redis.ts
import Redis from "ioredis";

let client: Redis | null = null;

export function getRedis(): Redis | null {
    const url = process.env.REDIS_URL;
    if (!url) return null;

    if (!client) {
        client = new Redis(url, {
            // Good defaults for serverless
            maxRetriesPerRequest: 2,
            enableAutoPipelining: true,
            lazyConnect: true,
        });
    }
    return client;
}
