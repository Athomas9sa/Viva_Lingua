const db = require("./conn");

class PostsModel {
    constructor(id, user_id, title, description, language, type, filename) {
        this.id = id;
        this.user_id = user_id;
        this.title = title;
        this.description = description;
        this.language = language;
        this.type = type;
        this.filename = filename;

    }
    static async postData() {
        try {
            const response = await db.one(`INSERT INTO posts (user_id, title, description, language, type, filename) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;`, [user_id, title, description, language, type, filename]);
            console.log("Post was created with ID:", response.id);
            return response;
        } catch(error) {
            console.error("ERROR: ", error.message);
            return error.message;
        }
    }

}



module.exports = PostsModel;
