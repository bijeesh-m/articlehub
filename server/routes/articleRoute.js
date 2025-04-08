const express = require("express");

const articleController = require("../controllers/articleController");

const router = express.Router();

router.get("/articles", articleController.articles);
router.get("/articles/:id", articleController.articleById);

module.exports = router;
