import { createPost, createPostWithDescription } from "../repositories/posts.repository.js";

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