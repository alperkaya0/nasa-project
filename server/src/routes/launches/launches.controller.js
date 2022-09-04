const { getAllLaunches, addNewLaunch, existsFlight, abortLaunch } = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
    //Array.from turns an iterable to an array.
    return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
    const launch = req.body;
    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.destination) {
        return res.status(400).json({
            error: "Missing arguments!"
        });
    }
    launch.launchDate = new Date(launch.launchDate);
    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: "Wrong date!"
        });
    }
    addNewLaunch(launch);
    return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
    const id = req.params.id;
    console.log("|"+id+"|");
    if (!existsFlight(parseInt(id))) {
        return res.status(400).json({
            error: "There is no flight with that id!",
        });
    }
    return res.status(200).json(abortLaunch(id));
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch,
}