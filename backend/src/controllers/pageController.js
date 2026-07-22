const Page = require('../models/Page.js');

const getPages = async (req, res) => {
    try {
        const pages = await Page.find();
        res.json(pages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getPageBySlug = async (req, res) => {
    try {
        const page = await Page.findOne({ slug: req.params.slug });
        if (page) {
            res.json(page);
        } else {
            res.status(404).json({ message: 'Page not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const createPage = async (req, res) => {
    try {
        const { title, slug, blocks } = req.body;
        const page = await Page.create({ title, slug, blocks });
        res.status(201).json(page);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getPages, getPageBySlug, createPage };
