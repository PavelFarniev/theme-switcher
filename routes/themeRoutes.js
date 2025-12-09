const express = require('express');
const router = express.Router();

const {
    getTheme,
    setTheme,
    setThemeByParam,
    checkTheme,
    updateTheme,
    resetTheme
} = require('../controllers/themeController');

router.get('/', getTheme);

// params
router.get('/set/:mode', setThemeByParam);

// query
router.get('/check', checkTheme);

// POST
router.post('/', setTheme);

// PUT
router.put('/', updateTheme);

// DELETE
router.delete('/', resetTheme);

module.exports = router;
