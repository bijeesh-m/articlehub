const Article = require("../models/articleModel");

module.exports.articles = async (req, res) => {
    try {
        const articles = await Article.find();
        res.status(200).json({ message: "Articles fetched success!", articles });
    } catch (error) {
        res.status(500).json({ message: "error", error: error.message });
    }
};
module.exports.articleById = async (req, res) => {
    const articleId = req.params.id;
    try {
        const article = await Article.findById(articleId);
        res.status(200).json({ message: "Articles fetched success!", article });
    } catch (error) {
        res.status(500).json({ message: "error", error: error.message });
    }
};
