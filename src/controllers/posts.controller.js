import { createPost, createPostWithDescription, getPosts } from "../repositories/posts.repository.js";
import { getUser } from "../repositories/users.repository.js";

export async function newPost(req, res) {
    try {
        const { photo, description } = req.body;
        let data = { photo, userId: res.locals.session.userId };

        if (description != undefined) {
            data.description = description;
            await createPostWithDescription(data);
        } else
            await createPost(data);


        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function homePage(req, res) {
    try {

        const userId = res.locals.session.userId;

        const userData = await getUser(userId);
        const postsData = await getPosts(userId);

        const data = {
            name: userData.rows[0].name,
            photo: userData.rows[0].photo,
            biography: userData.rows[0].biography,
            posts: postsData.rows
        }

        res.send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
}