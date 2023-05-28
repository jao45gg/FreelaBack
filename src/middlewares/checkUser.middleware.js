import { getUser } from "../repositories/users.repository.js";

export default async function checkUser(req, res, next) {
    try {

        const { userId } = req.params;

        const userData = await getUser(userId);
        if (userData.rowCount <= 0) return res.sendStatus(404);

        res.locals.userData = userData.rows[0];

        next();
    } catch (err) {
        res.status(500).send(err.message);
    }
}