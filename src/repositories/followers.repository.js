import db from "../database/database.connection.js";

export async function followers(userId) {
    return db.query(`SELECT follower FROM followers WHERE follows=$1`, [userId]);
}

export async function follows(userId) {
    return db.query(`SELECT follows FROM followers WHERE follower=$1`, [userId]);
}

export async function checkFollows(follower, follows) {
    return db.query(`SELECT * FROM followers WHERE follower=$1 AND follows=$2`, [follower, follows]);
}

export async function follow(follower, follows) {
    return db.query(`INSERT INTO followers (follower, follows) VALUES ($1,$2)`, [follower, follows]);
}