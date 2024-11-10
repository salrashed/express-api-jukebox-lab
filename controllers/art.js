const Art = require('../models/art');
const express = require('express');
const router = express.Router();

// Add a new track

router.post('/', async (req, res) => {
  try {
    const createArt = await Art.create(req.body);
    res.status(201).json(createArt);
} catch (error) {
    res.status(500).json({ error: 'somthing went wrong' });
}
});

// Get all tracks

router.get('/', async (req, res) => {
  try {
    const allArt = await Art.find();
    res.status(200).json(allArt);
  } catch (error) {
    res.status(500).json({ error: 'error.message' });
  }
})

// Get a single track

 router.get('/:id', async (req, res) => {
  try {
    const oneArt = await Art.findById(req.params.id);
    res.status(200).json(oneArt);
  } catch (error) {
    res.status(500).json({ error: 'error.message' });
  }
})

// Update a track

router.put('/:id', async (req, res) => {
  try {
    const updateArt = await Art.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updateArt) {
     res.status(404)
     throw new Error ('Art not found');
    }
    res.status(200).json(updateArt);
} catch (error) {
    if (res.statusCode === 404) {
        res.json({ error: 'error.message' });
    } else {
        res.status(500).json({ error: 'error.message' });
    }
}
})

// Delete a track

router.delete('/:id', async (req, res) => {
  try {
    const deleteArt = await Art.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteArt);
  } catch (error) {
    res.status(500).json({ error: 'error.message' });
  }
})

module.exports = router;