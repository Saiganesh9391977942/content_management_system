const express = require('express');
const router = express.Router();
const { getPages, getPageBySlug, createPage } = require('../controllers/pageController');
const { protect } = require('../middleware/authMiddleware');

// Public routes
router.get('/', getPages);
router.get('/:slug', getPageBySlug);

// Protected Admin routes
router.post('/', protect, createPage);

module.exports = router;
