import { checkFollows, follow, followers, follows } from "../repositories/followers.repository.js";
import { getUser } from "../repositories/users.repository.js";

export async function followUser(req, res) {
    try {

        const { userId } = req.params;
        if(res.locals.session.userId == userId) return res.sendStatus(422);

        const isValid = await checkFollows(res.locals.session.userId, userId);
        if (isValid.rowCount > 0) return res.sendStatus(422);

        await follow(res.locals.session.userId, userId);
        res.sendStatus(204);

    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getFollows(req, res) {
    try {

        const { userId } = req.params;

        const userFollows = await follows(userId);

        const data = userFollows.rows.map(f => {
            return f.follows
        })

        res.send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getFollowers(req, res) {
    try {

        const { userId } = req.params;

        const userFollowers = await followers(userId);

        const data = userFollowers.rows.map(f => {
            return f.follower
        })

        res.send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
}