const express = require('express');
const router = express.Router();
const Beer = require('../models/Beer');

//ROUTES
//Get back all the beers
router.get('/', async (req, res) => {
    try {
        const beers = await Beer.find();
        res.json(beers);
    } catch (err) {
        res.json({ message: err });
    }
});

//Add a beer
router.post('/', async (req, res) => {
    const beer = new Beer({
        beerName: req.body.beerName,
        breweryName: req.body.breweryName,
        countryOfOrigin: req.body.countryOfOrigin,
        image: req.body.image,
        type: req.body.type,
        alcoholContent: req.body.alcoholContent,
        description: req.body.description
    });
    try {
        const savedBeer = await beer.save();
        res.json(savedBeer);
    } catch (err) {
        res.json({ message: err });
    }
});

//Get a specific beer
router.get('/:beerId', async (req, res) => {
    try {
        const beer = await Beer.findById(req.params.beerId);
        res.json(beer);
    } catch (err) {
        res.json({ message: err });
    }
});

//Delete a specific beer
router.delete('/:beerId', async (req, res) => {
    try {
        const removedBeer = await Beer.deleteOne({ _id: req.params.beerId }); //remove where _id matches req.params.postId
        res.json(removedBeer);
    } catch (err) {
        res.json({ message: err });
    }
});

//Update a beer's entry
router.patch('/:beerId', async (req, res) => {
    try {
        const updatedBeer = await Beer.updateOne(
            { _id: req.params.beerId }, //update where _id matches req.params.postId
            { $set: { //Set beer variables
                beerName: req.body.beerName,
                breweryName: req.body.breweryName,
                countryOfOrigin: req.body.countryOfOrigin,
                image: req.body.image,
                type: req.body.type,
                alcoholContent: req.body.alcoholContent,
                description: req.body.description
             } }
        );
        res.json(updatedBeer);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
