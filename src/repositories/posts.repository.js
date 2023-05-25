import db from "../database/database.connection.js";

export async function createPost(data) {

    const { photo, userId } = data;

    return db.query(`INSERT INTO "posts" (photo, "userId") VALUES ($1, $2)`, [photo, userId]);
}

export async function createPostWithDescription(data) {

    const { photo, description, userId } = data;

    return db.query(`INSERT INTO "posts" (photo, description,"userId") VALUES ($1, $2, $3)`, [photo, description, userId]);
}

export async function getPosts(userId) {
    return db.query(`SELECT photo, description, "postedAt", "likesCount" FROM
                     posts WHERE "userId"=$1`, [userId]);
}