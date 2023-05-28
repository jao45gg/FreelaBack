import { checkEmail } from "../repositories/users.repository.js";

export default async function checkEmailMiddleware(req, res, next) {
    try {

        const { email } = req.body;

        const user = await checkEmail(email);
        if (user.rowCount <= 0) return res.sendStatus(401);

        res.locals.user = user;

        next();
    } catch (err) {
        res.status(500).send(err.message);
    }
}