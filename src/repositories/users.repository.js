import db from "../database/database.connection.js";

export async function checkToken(token) {
    return db.query(`SELECT * FROM "tokens" WHERE token=$1`, [token]);
}