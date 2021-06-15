const express = require('express');
const router = express.Router();
const api = require('./api');



router.post('/login', (req, res, next) => {
    api.login(req, res, next);
});
router.post('/register', (req, res, next) => {
    api.register(req, res, next);
});
router.post('/GetBookInfo', (req, res, next) => {
    api.GetBookInfo(req, res, next);
});
router.post('/GetUserInfo', (req, res, next) => {
    api.GetUserInfo(req, res, next);
});
router.post('/book', (req, res, next) => {
    api.book(req, res, next);
});

module.exports = router;