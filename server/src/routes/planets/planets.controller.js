const { planets } = require('../../models/planets.model');

function getAllPlanets(req, res) {
    //return is used here because, just to make sure that our controller functions set the response once
    return res.status(200).json(planets);
}

module.exports = {
    getAllPlanets
};