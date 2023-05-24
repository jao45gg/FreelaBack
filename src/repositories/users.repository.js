import db from "../database/database.connection.js";

export async function checkToken(token) {
    return db.query(`SELECT * FROM "tokens" WHERE token=$1`, [token]);
}

export async function registerNewUser(user) {

    const { name, email, password } = user;

    return db.query(`INSERT INTO "users" (name, email, password) VALUES ($1, $2, $3)`, [name, email, password]);
}

export async function registerNewUserWithFoto(user) {

    const { name, email, password, photo } = user;

    return db.query(`INSERT INTO "users" (name, email, password, photo) VALUES ($1, $2, $3, $4)`, [name, email, password, photo]);
}

export async function registerNewUserWithBiography(user) {

    const { name, email, password, biography } = user;

    return db.query(`INSERT INTO "users" (name, email, password, biography) VALUES ($1, $2, $3, $4)`, [name, email, password, biography]);
}

export async function registerNewCompleteUser(user) {

    const { name, email, password, photo, biography } = user;

    return db.query(`INSERT INTO "users" (name, email, password, photo, biography) VALUES ($1, $2, $3, $4, $5)`, [name, email, password, photo, biography]);
}

export async function checkEmail(email) {
    return db.query(`SELECT * FROM "users" WHERE email=$1`, [email]);
}

export async function registerNewToken(session) {

    const { token, userId } = session;

    return db.query(`INSERT INTO "tokens" ("userId", token) VALUES ($1, $2)`, [userId, token]);
}