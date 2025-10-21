import { SignJWT, jwtVerify } from "jose";

const alg = "HS256";
const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export type SessionPayload = { sub: string; iat?: number; exp?: number };

export async function createSessionToken(userId: string, ttlSeconds = 60 * 60 * 3) {
    const now = Math.floor(Date.now() / 1000);
    return await new SignJWT({ sub: userId })
        .setProtectedHeader({ alg })
        .setIssuedAt(now)
        .setExpirationTime(now + ttlSeconds)
        .sign(secret);
}

export async function verifySessionToken(token: string) {
    const { payload } = await jwtVerify(token, secret, { algorithms: [alg] });
    return payload as SessionPayload;
}
