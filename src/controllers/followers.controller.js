import { follow, followers } from "../repositories/followers.repository.js";
import { getUser } from "../repositories/users.repository.js";

export async function followUser(req, res) {
    try {

        const { userId } = req.params;
        const userData = await getUser(userId);
        if (userData.rowCount <= 0) return res.sendStatus(404);

        await follow(res.locals.session.userId, userId);
        res.sendStatus(204);

    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getFollowers(req, res) {
    try {

        const { userId } = req.params;
        const userData = await getUser(userId);
        if (userData.rowCount <= 0) return res.sendStatus(422);

        const userFollowers = await followers(userId);

        const data = userFollowers.rows.map(f => {
            return f.follower
        })

        res.send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getFollows(req, res) {
    try {

        const { userId } = req.params;
        const userData = await getUser(userId);
        if (userData.rowCount <= 0) return res.sendStatus(422);

        const userFollowers = await followers(userId);

        const data = userFollowers.rows.map(f => {
            return f.follower
        })

        res.send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
}