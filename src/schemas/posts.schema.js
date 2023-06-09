import joi from "joi";

const postSchema = joi.object({
    photo: joi.string().uri().required(),
    description: joi.string()
});

export default postSchema;