const express = require("express");
const path = require("path");

const router = express.Router();
const endpoint = "/survey";

router.get(endpoint, (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../dist', 'survey.html'));
});

router.put(endpoint, (req, res) => {

});