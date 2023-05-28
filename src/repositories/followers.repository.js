import db from "../database/database.connection.js";

export async function followers(userId) {
    return db.query(`SELECT follower FROM followers WHERE follows=$1`, [userId]);
}

export async function follow(follower, follows) {
    return db.query(`INSERT INTO followers (follower, follows) VALUES ($1,$2)`, [follower, follows]);
}