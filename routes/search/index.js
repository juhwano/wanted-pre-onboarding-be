const express = require("express");
const router = express.Router();
const searchController = require("../../controller/search/searchController");

//검색
router.get("/", searchController.searchQuery);

module.exports = router;
